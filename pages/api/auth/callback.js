import Cookies from 'cookies';
import jwt from 'jsonwebtoken';
import getSession from '../../../utils/httpSession';
import { AUTH_COOKIE } from '../../../utils/auth';
import spotify, {
  retrieveSpotifyTokens,
  setSpotifyAuth,
} from '../../../utils/spotify';
import { queueIdFromUser } from '../../../utils/queueSession';

const { JWT_SECRET } = process.env;

export default async function handler(req, res) {
  const { state, code } = req.query;
  const session = await getSession(req, res);
  const cookies = new Cookies(req, res);

  if (!session.spotifyState) {
    // In dev server, this will fail the first time you execute the /auth/login call, because of compiling at call
    console.log('No Spotify state was found in session');
    return res.status(500).json({ message: 'Internal Server Error' });
  }

  if (session.spotifyState !== state) {
    console.log('State in session does not match with provided state');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const authTokens = await retrieveSpotifyTokens(code);

  session.spotifyState = null;

  // Prepare JWT Payload
  const user = await spotify(authTokens).user();
  const queueId = queueIdFromUser(user);

  setSpotifyAuth(queueId, authTokens);

  console.log(queueId, authTokens);

  const token = jwt.sign({ queueId, user }, JWT_SECRET);
  cookies.set(AUTH_COOKIE, token);
  res.redirect(session.originalUrl || '/');
}
