import { createClient } from 'redis';

const redis = createClient();

const connectRedis = async () => {
  try {
    await redis.ping();
    return;
  } catch {
    await redis.connect();
  }
};

export const setSpotifyAuth = async (
  authKey,
  { accessToken, refreshToken },
) => {
  await connectRedis();

  if (!accessToken || !refreshToken) {
    throw new Error('Invalid credentials for authentication cache');
  }

  await redis.set(`${authKey}-access`, accessToken);
  await redis.set(`${authKey}-refresh`, refreshToken);
};

export const setAccessToken = async (authKey, accessToken) => {
  await connectRedis();
  await redis.set(`${authKey}-access`, accessToken);
};

export const getSpotifyAuth = async (key) => {
  await connectRedis();
  const accessToken = await redis.get(`${key}-access`);
  const refreshToken = await redis.get(`${key}-refresh`);

  return accessToken && refreshToken
    ? {
        accessToken,
        refreshToken,
      }
    : null;
};
