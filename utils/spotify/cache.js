// Stateful Cache
let authCache = {};

if (process.env.NODE_ENV !== 'production') {
  authCache['881cd88c-2dce-51c8-9f23-15a002018515'] = {
    accessToken:
      'BQDbAvMxzqH44YSQ2JzDpPzkM6Ct8Tp1IHks_5ZI3LAXmii7qAnZOKdG6pS6n9MQbJT8Sqr6qDUNo1Kd9cErY_PpMn_esOeLxduxOxxjlIkihzrX7yaSBRIN-5PH4djzyOsguHnpyN7J1Z1SD9OoY290NAJDMg',
    refreshToken:
      'AQBMXjPNbtFVDubdKCvtzggfKc69hUBeoHJXFWtEeTXiMrNUleDu0CbRQdPmSeS3TgRkVy1J9iiHczdA3GGKuSMmxUtToYqJ9k1_eRRoa84TftbO9VOOXuaOd5o64bq5efI',
  };
}

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
