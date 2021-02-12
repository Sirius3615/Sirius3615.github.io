// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')
      
var all_events = '../data/tweets.json';

var prefix_api = "/api/v1";

// Declare an API route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// API route - "events"
fastify.get(prefix_api + '/events', async (request, reply) => {
  return {
      hat: 5,
      socks: 5,
      shirt: 25,
      pants: 40
    }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
