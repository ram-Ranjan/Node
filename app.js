
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(4000,'localhost', () => {
    console.log('Handling Requests')
});