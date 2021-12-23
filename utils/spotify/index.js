import formEncode from 'form-urlencoded';
import { fromTrackItem, fromUserResponse } from './transform';
import { accountRequest, authenticatedApiRequest } from './request';

export { API_URL, ACCOUNT_URL, AUTHORIZE_SCOPE } from './const';
export {
  setSpotifyAuth,
  setAccessToken,
  getSpotifyAuth,
  getCache,
} from './cache';

const { REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } = process.env;

const toBase64 = (str) => Buffer.from(str).toString('base64');

/*
 * CAUTION: This exported module is stateful...
 * To use it, you'll have to put the auth data in the in-memory cache first.
 * `authKey` defines the cached key to use as access token and refresh token store.
 *
 * At least that stateful mindfuck brings in one big benefit: Automatic refresh of accessToken if it expires.
 */

export const retrieveSpotifyTokens = async (authorizationCode) => {
  const { access_token: accessToken, refresh_token: refreshToken } =
    await accountRequest('/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${toBase64(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
      body: formEncode({
        code: authorizationCode,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

  return { accessToken, refreshToken };
};

export const user = (authKey) => async () =>
  fromUserResponse(await authenticatedApiRequest(authKey, '/me'));

export const currentTrack = (authKey) => async () =>
  fromTrackItem(
    (await authenticatedApiRequest(authKey, '/me/player/currently-playing'))
      .item,
  );

export const search = (authKey) => async (query) =>
  (
    await authenticatedApiRequest(authKey, `/search?type=track&q=${query}`)
  ).tracks.items.map(fromTrackItem);

export const addToQueue = (authKey) => (trackId) =>
  authenticatedApiRequest(
    authKey,
    `/me/player/queue?uri=spotify:track:${trackId}`,
    { method: 'POST' },
  );

// eslint-disable-next-line import/no-anonymous-default-export
export default (authKey) => ({
  user: user(authKey),
  currentTrack: currentTrack(authKey),
  search: search(authKey),
  addToQueue: addToQueue(authKey),
});
