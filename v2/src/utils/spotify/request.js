import _ from 'lodash/fp';
import fetch from 'node-fetch';
import { ACCOUNT_URL, API_URL } from '../../const';

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
  { accessToken },
  uri,
  { method = 'GET', headers, body, ...options } = {},
) =>
  apiRequest(uri, {
    method,
    headers: { Authorization: `Bearer ${accessToken}`, ...headers },
    body,
    ...options,
  });
