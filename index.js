// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')
const jsonfile = require('jsonfile')
      
var all_events = '../data/tweets.json';

var prefix_api = "/api/v1";


/**
 helper functions for get data from json files
 **/
var getAllEvents = function () {
    return jsonfile.readFileSync(all_events);
};


//no imput
// Declare an API route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// API route - "events"
fastify.get(prefix_api + '/events', async (request, reply) => {
  var result = [];
  return result.push(getAllEvents);
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
