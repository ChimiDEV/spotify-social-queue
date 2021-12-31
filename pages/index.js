import { Box, Button } from '@mui/material';
import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import RedirectModal from '../components/RedirectModal';
import { verifyAuthentication } from '../utils/auth';
import { getSpotifyAuth } from '../utils/cache';

const CenteredHeadline = styled('h2', {
  display: 'block',
  textAlign: 'center',
  color: '#fff',
});

// Use SSR to check if the user is logged in. This react page is the only "protected" page
export async function getServerSideProps({ req, res }) {
  const jwtPayload = verifyAuthentication(req);

  if (!jwtPayload) {
    return {
      redirect: {
        destination: '/api/auth/login',
      },
    };
  }

  try {
    const { queueId } = jwtPayload;

    const auth = await getSpotifyAuth(queueId);

    // Login again if no access token/refresh token exist in the auth cache
    if (!auth) {
      return {
        redirect: {
          destination: '/api/auth/login',
        },
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

export default function Home({ queueId }) {
  const [sessionUrl, setSessionUrl] = useState(null);
  const [redirectModal, setRedirectModal] = useState(false);

  useEffect(
    () =>
      setSessionUrl(
        `${location.protocol}//${location.host}/sessions/${queueId}`,
      ),
    [],
  );

  const onRedirectModalClose = () => {
    setRedirectModal(false);
  };

  const startSession = async () => {
    setRedirectModal(true);
  };

  return (
    <Box sx={{ width: '100vw', marginTop: '50px' }}>
      <RedirectModal
        open={redirectModal}
        onClose={onRedirectModalClose}
        href={sessionUrl}
      />
      <CenteredHeadline>Spotify Social Queue</CenteredHeadline>
      <Button
        variant="contained"
        onClick={startSession}
        sx={{ margin: '0 auto', display: 'block' }}
      >
        Starte eine Session
      </Button>
    </Box>
  );
}
