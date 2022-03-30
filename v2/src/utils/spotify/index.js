import formEncode from 'form-urlencoded';
import { fromTrackItem, fromUserResponse } from './transform';
import { accountRequest, authenticatedApiRequest } from './request';

export { API_URL, ACCOUNT_URL, AUTHORIZE_SCOPE } from '../../const';
const { REDIRECT_URI, CLIENT_ID, CLIENT_SECRET } = process.env;

const toBase64 = str => Buffer.from(str).toString('base64');

export const retrieveSpotifyTokens = async authorizationCode => {
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

export const user = authTokens => async () =>
  fromUserResponse(await authenticatedApiRequest(authTokens, '/me'));

export const currentTrack = authTokens => async () =>
  fromTrackItem(
    (await authenticatedApiRequest(authTokens, '/me/player/currently-playing'))
      .item,
  );

export const search = authTokens => async query =>
  (
    await authenticatedApiRequest(authTokens, `/search?type=track&q=${query}`)
  ).tracks.items.map(fromTrackItem);

export const addToQueue = authTokens => trackId =>
  authenticatedApiRequest(
    authTokens,
    `/me/player/queue?uri=spotify:track:${trackId}`,
    { method: 'POST' },
  );

// eslint-disable-next-line import/no-anonymous-default-export
export default authTokens => ({
  user: user(authTokens),
  currentTrack: currentTrack(authTokens),
  search: search(authTokens),
  addToQueue: addToQueue(authTokens),
});
