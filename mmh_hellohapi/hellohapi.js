let Hapi = require('hapi');
let server = new Hapi.Server();
    
 server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    return reply('hello hapi')
  }
})

 server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
