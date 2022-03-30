export default (fastify, opts, done) => {
  fastify.get('/redis/connect', async (req, reply) => {
    try {
      await fastify.redis.connect();
      return reply.code(201).send();
    } catch (err) {
      if (err.message === 'Socket already opened') {
        return reply.code(201).send();
      }
      return reply.code(500).send(err);
    }
  });

  done();
};
