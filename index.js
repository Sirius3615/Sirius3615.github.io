// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

var request = require('request');      
var all_events = '../data/events.json';

var prefix_api = "/api/v1";
var month = process.env.MONTH;
var year = process.env.YEAR;


//no imput
// Declare an API route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// API route - "events"
fastify.get(prefix_api + '/event/date=1-3-2021' + month + '-' + year , async (request, reply) => {
  return {
      "date" : "01.03.2021",
      "title" : "The Moon at aphelion",
      "summary" : "The Moon's monthly orbit around the Earth will carry it to its furthest point from the Sun – its aphelion – at a distance of 0.9930 AU from the Sun.",
      "url" : "https://in-the-sky.org/news.php?id=20210301_08_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/moon/the_moon_at_aphelion.jpg"
  }
});

fastify.get(prefix_api + '/event/date=2-3-2021' , async (request, reply) => {
  return {
      "date" : "02.03.2021",
      "title" : "C/2020 R4 (ATLAS) at perihelion",
      "summary" : "Comet C/2020 R4 (ATLAS) will make its closest approach to the Sun, at a distance of 1.03 AU. ",
      "url" : "https://in-the-sky.org/news.php?id=20210302_19_100",
      "imageUrl" : "https://in-the-sky.org/image.php?style=icon&img=imagedump/comets/comets.jpg"
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
