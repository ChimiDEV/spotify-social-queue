import { serialize } from 'cookie';

export const setCookie = (res, name, value, options = {}) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  res.setHeader(
    'Set-Cookie',
    serialize(name, stringValue, { ...options, path: '/' }),
  );
};

export const deleteCookie = (res, name) => {
  res.setHeader('Set-Cookie', serialize(name, 'deleted', { maxAge: '-1' }));
};
