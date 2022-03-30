import { callback, login, logout, verify } from '../handlers/auth';

export default (fastify, opts, done) => {
  fastify.get('/', verify);

  fastify.get('/login', login);
  fastify.get('/logout', logout);
  fastify.get('/callback', callback(fastify));
  fastify.get('/verify', verify);

  done();
};
