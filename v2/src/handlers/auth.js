import _ from 'lodash/fp';
import jwt from 'jsonwebtoken';
import { ACCOUNT_URL, AUTHORIZE_SCOPE, AUTH_COOKIE } from '../const';
import { authKeyFromUser, setSpotifyAuth } from '../utils/cache';
import { retrieveSpotifyTokens, user as spotifyUser } from '../utils/spotify';

const { CLIENT_ID, REDIRECT_URI, JWT_SECRET } = process.env;

const queryString = _.pipe(_.entries, _.map(_.join('=')), _.join('&'));

export const login = (req, reply) => {
  const authorizeUrl = `${ACCOUNT_URL}/authorize?${queryString({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: AUTHORIZE_SCOPE,
    redirect_uri: REDIRECT_URI,
  })}`;

  return req.query.url
    ? { redirect: authorizeUrl }
    : reply.redirect(authorizeUrl);
};

export const logout = () => {};

export const callback = fastify => async (req, reply) => {
  const tokens = await retrieveSpotifyTokens(req.query.code);
  const user = await spotifyUser(tokens)();

  const queueId = authKeyFromUser(user);
  await setSpotifyAuth(fastify.redis, queueId, tokens);

  const jwtApiKey = jwt.sign({ queueId, user }, JWT_SECRET);
  return reply
    .cookie(AUTH_COOKIE, jwtApiKey, { path: '/' })
    .send({ apiKey: jwtApiKey });
};

// Todo: Maybe check redis for existing tokens
export const verify = (req, reply) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(' ').pop()
    : req.cookies[AUTH_COOKIE];

  if (!token) {
    return reply.code(401).send({
      errors: [
        {
          status: '401',
          title: 'Unauthorized',
          detail: 'Missing authentication token in header or cookie',
        },
      ],
    });
  }

  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return reply.code(401).send({
      errors: [
        {
          status: '401',
          title: 'Unauthorized',
          detail: 'Invalid JWT token',
        },
      ],
    });
  }
};
