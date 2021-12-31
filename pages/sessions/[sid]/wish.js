import Layout from '../../../components/Layout';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import ClipboardModal from '../../../components/ClipboardModal';
import { useRouter } from 'next/router';
import { getSpotifyAuth } from '../../../utils/cache';
import WishCard from '../../../components/WishCard';

const extractSpotifyId = (url) => url.split('/').pop().split('?')[0];

const putInQueue = async (sid, trackId) => {
  const id = trackId.startsWith('https://open.spotify.com/track')
    ? extractSpotifyId(trackId)
    : trackId;

  await fetch(`/api/sessions/${sid}?track_id=${id}`, {
    method: 'POST',
  });
};

const searchForSongs = async (sid, searchValue) => {
  const res = await fetch(`/api/sessions/${sid}/tracks?q=${searchValue}`);
  return res.json();
};

// Use SSR to check if the session exists
export async function getServerSideProps({ req }) {
  try {
    const queueId = req.url.split('/').pop();
    const auth = await getSpotifyAuth(queueId);

    // Login again if no access token/refresh token exist in the auth cache
    if (!auth) {
      return {
        notFound: true,
      };
    }

    return {
      props: { queueId },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

export default function Wish() {
  const [searchValue, setSearchValue] = useState();
  const [spotifyUrl, setSpotifyUrl] = useState();
  const [clipboardModal, setClipboardModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();

  const closeModal = () => {
    setSpotifyUrl('');
    setClipboardModal(false);
  };

  const searchOnEnter = async (e) => {
    if (e.code !== 'Enter') return;

    setSearchResults(await searchForSongs(router.query.sid, searchValue));
  };

  const onClipboardButton = async () => {
    if (!navigator.clipboard) {
      // Unable to retrieve from Clipboard, ask for user input
      setClipboardModal(true);
      return;
    }

    const shareUrl = await navigator.clipboard.readText();
    await putInQueue(router.query.sid, shareUrl);
  };

  return (
    <Layout>
      <ClipboardModal
        onClose={closeModal}
        onChange={(e) => setSpotifyUrl(e.target.value)}
        onSubmit={async () => {
          await putInQueue(router.query.sid, spotifyUrl);
          closeModal();
        }}
        open={clipboardModal}
      />
      <Box sx={{ paddingTop: '15px' }}>
        <TextField
          label="Suche"
          variant="outlined"
          size="small"
          placeholder="Suche nach deinem Wunschsong"
          fullWidth
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={searchOnEnter}
        />
      </Box>
      <Box sx={{ marginTop: '15px' }}>
        <Button onClick={onClipboardButton}>Aus Zwischenablage</Button>
        {/* <Button onClick={() => console.log(searchResults)}>Debug</Button> */}
        <Button
          variant="contained"
          onClick={async () =>
            setSearchResults(
              await searchForSongs(router.query.sid, searchValue),
            )
          }
        >
          Suchen
        </Button>
      </Box>
      <Box sx={{ color: 'white', marginTop: '20px' }}>
        {searchResults.map((song, i) => (
          <WishCard
            key={i}
            song={song}
            onWish={(songUri) => putInQueue(router.query.sid, songUri)}
          />
        ))}
      </Box>
    </Layout>
  );
}
