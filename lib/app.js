const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const supertest = require('supertest');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/' && request.method === 'GET') {
      const body = '<h1>hi<h1>';

      socket.end(createResponse({
        body: body
      }));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }

  });
});

module.exports = app;
