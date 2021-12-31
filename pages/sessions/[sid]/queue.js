import MenuBar from '../../../components/MenuBar';
import { styled } from '@stitches/react';
import { getSpotifyAuth } from '../../../utils/cache';

const WhiteFont = styled('div', {
  color: 'White',
});

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

export default function Queue() {
  return (
    <>
      <WhiteFont>Queue</WhiteFont>
      <MenuBar />
    </>
  );
}
