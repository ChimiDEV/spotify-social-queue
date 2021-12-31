import { getSpotifyAuth } from '../../../utils/cache';
import Wish from './wish';

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

export default function Index() {
  return <Wish />;
}
