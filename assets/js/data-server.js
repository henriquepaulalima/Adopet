const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./index')());
const middlewares = jsonServer.defaults();
const port = 3030;

server.use(middlewares);
server.use(router);

server.listen(port);