
const http = require('http');
const routes = require('./routes');

//const text=require('./text')

console.log(routes.text)

const server = http.createServer(routes.handler);

server.listen(4000,'localhost', () => {
    console.log('Handling Requests')
});