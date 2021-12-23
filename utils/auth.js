import _ from 'lodash/fp';
import jwt from 'jsonwebtoken';
import getSession from './httpSession';

const { JWT_SECRET } = process.env;

const fromBearer = (bearerHeader) =>
  bearerHeader &&
  bearerHeader.startsWith('Bearer') &&
  _.last(bearerHeader.split(' '));

export const AUTH_COOKIE = 'social-queue-auth';

/**
 * Returns JWT payload.
 * If user is not authenticated returns null
 *
 * @param {*} req
 * @returns
 */
export const verifyAuthentication = (req) => {
  const authToken =
    req.cookies[AUTH_COOKIE] || fromBearer(req.headers.authorization);
  if (!authToken) {
    return null;
  }

  // Validate Auth
  try {
    return jwt.verify(authToken, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

export const protectedRoute =
  (handler, { redirect = false } = {}) =>
  async (req, res) => {
    req.auth = verifyAuthentication(req);

    if (req.auth === null) {
      // if redirect is true, redirect to auth url. Keep original url in session
      if (redirect) {
        const session = await getSession(req, res);
        session.originalUrl = req.url;

        return res.redirect('/api/auth/login');
      }

      return res.status(401).json({ message: 'Unauthorized' });
    }
    return handler(req, res);
  };
