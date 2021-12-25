import Layout from '../../../components/Layout';
import { styled } from '@stitches/react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ClipboardModal from '../../../components/ClipboardModal';
import { useRouter } from 'next/router';

const extractSpotifyId = (url) => url.split('/').pop().split('?')[0];

const putInQueue = async (sid, shareUrl) => {
  if (!shareUrl.startsWith('https://open.spotify.com/track')) {
    // invalid spotify url
    return;
  }

  await fetch(`/api/sessions/${sid}?track_id=${extractSpotifyId(shareUrl)}`, {
    method: 'POST',
  });
};

const searchForSongs = async (sid, searchValue) => {
  const res = await fetch(`/api/sessions/${sid}/tracks?q=${searchValue}`);

  return res.json();
};

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
      <Box sx={{ color: 'white' }}>
        {searchResults.map((x, i) => (
          <div key={i}>
            {x.name} | {x.artist}
          </div>
        ))}
      </Box>
    </Layout>
  );
}
