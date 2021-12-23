// Stateful Cache
let authCache = {};

export const setSpotifyAuth = (authKey, { accessToken, refreshToken }) => {
  if (!accessToken || !refreshToken) {
    throw new Error('Invalid credentials for authentication cache');
  }

  authCache[authKey] = { accessToken, refreshToken };
};

export const setAccessToken = (authKey, accessToken) => {
  if (!authCache[authKey]) return;

  authCache[authKey].accessToken = accessToken;
};

export const getSpotifyAuth = (key) => authCache[key];
