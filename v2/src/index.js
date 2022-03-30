import './utils/env';
import fastify from 'fastify';
import fastifyCookie from 'fastify-cookie';
import authRouter from './routes/auth';
import adminRouter from './routes/admin';
import redisPlugin from './plugins/redis';

const { PORT = 8080, COOKIE_SECRET } = process.env;

const server = fastify({
  logger: true,
});

server.register(fastifyCookie, { secret: COOKIE_SECRET });
server.register(redisPlugin);
server.register(authRouter, { prefix: '/api/auth' });
server.register(adminRouter, { prefix: '/api/admin' });

server.listen(PORT, '0.0.0.0', err => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
