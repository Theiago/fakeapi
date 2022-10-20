const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('lanches.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const path = '/api';

server.listen()
server.use(middlewares);
server.use(path, router);

server.listen(port);