import { v5 as uuid } from 'uuid';

const UUID_NAMESPACE = '6cf2a1e4-6b1d-45fc-aae7-3b5a675593f9';

export const authKeyFromUser = ({ id, displayName }) =>
  uuid(`${displayName}@${id}`, UUID_NAMESPACE);

export const setSpotifyAuth = async (
  redis,
  authKey,
  { accessToken, refreshToken },
) => {
  if (!accessToken || !refreshToken) {
    throw new Error('Invalid credentials for authentication cache');
  }

  await redis.set(`${authKey}-access`, accessToken);
  await redis.set(`${authKey}-refresh`, refreshToken);
};

export const setAccessToken = (redis, authKey, accessToken) =>
  redis.set(`${authKey}-access`, accessToken);

export const getSpotifyAuth = async (redis, authKey) => {
  const accessToken = await redis.get(`${authKey}-access`);
  const refreshToken = await redis.get(`${authKey}-refresh`);

  return accessToken && refreshToken
    ? {
        accessToken,
        refreshToken,
      }
    : null;
};
