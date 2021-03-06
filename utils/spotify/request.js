import _ from 'lodash/fp';
import fetch from 'node-fetch';
import formEncode from 'form-urlencoded';
import { getSpotifyAuth, setAccessToken } from '../cache';
import { ACCOUNT_URL, API_URL } from './const';

const { CLIENT_ID, CLIENT_SECRET } = process.env;

const toBase64 = (str) => Buffer.from(str).toString('base64');

const refresh = async (authKey) => {
  const auth = (await getSpotifyAuth(authKey)) || authKey;

  const { access_token: accessToken } = await accountRequest('/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${toBase64(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    body: formEncode({
      refresh_token: auth.refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  if (_.isString(authKey)) {
    // If authKey wasn't a string, don't update the cache
    await setAccessToken(authKey, accessToken);
  }

  return accessToken;
};

export const apiRequest = async (
  uri,
  { method = 'GET', headers, body, ...options } = {},
) => {
  const res = await fetch(`${API_URL}${encodeURI(uri)}`, {
    method,
    headers,
    body,
    ...options,
  });

  if (!res.ok) {
    throw new Error(res);
  }

  if (res.status === 204) {
    return;
  }

  try {
    return res.json();
  } catch {
    return res;
  }
};

export const accountRequest = async (
  uri,
  { method = 'GET', headers, body, ...options } = {},
) =>
  (
    await fetch(`${ACCOUNT_URL}${encodeURI(uri)}`, {
      method,
      headers,
      body,
      ...options,
    })
  ).json();

export const authenticatedApiRequest = async (
  authKey,
  uri,
  { method = 'GET', headers, body, ...options } = {},
) => {
  // authKey found in Cache OR authKey IS auth object
  const auth = (await getSpotifyAuth(authKey)) || authKey;

  if (!auth.accessToken || !auth.refreshToken) {
    console.log('No authentication could be found');
    return null; // Reject promise later on
  }

  const request = (token) =>
    apiRequest(uri, {
      method,
      headers: { Authorization: `Bearer ${token}`, ...headers },
      body,
      ...options,
    });

  try {
    const res = await request(auth.accessToken);
    return res;
  } catch (err) {
    const res = request(await refresh(authKey));
    return res;
  }
};
