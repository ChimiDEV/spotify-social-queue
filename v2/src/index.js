import fastify from 'fastify';

const { PORT = 8080 } = process.env;

const server = fastify({
  logger: true,
});

server.listen(PORT, err => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
