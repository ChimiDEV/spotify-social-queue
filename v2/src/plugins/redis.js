import fp from 'fastify-plugin';
import { createClient } from 'redis';

const redisPlugin = async (fastify, opts, done) => {
  const client = createClient();
  fastify.decorate('redis', client);

  try {
    client.on('error', err => {
      fastify.log.error(err);
      done();
    });

    await client.connect();
  } catch (err) {
    fastify.log.error(err);
    fastify.log.warn('No Redis Connection is setup');
  }

  done();
};

export default fp(redisPlugin, { name: 'redis-plugins' });
