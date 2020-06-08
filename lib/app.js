const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
// const supertest = require('supertest');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    //get path for / that says hi
    if(request.path === '/' && request.method === 'GET') {
      const body = 'hi';

      socket.end(createResponse({
        body: body,
        status: '200 OK',
        contentType: 'text/html'
      }));

      //path for /echo post 
    } else if(request.path === '/echo' && request.method === 'POST') {
      
      socket.end(createResponse({
        body: request.body,
        status: '200 OK', 
        contentType: 'text/html'
      }));
    
    } else if(request.path === '/red' && request.method === 'GET') {
      const body = '<h1>red</h1>';

      socket.end(createResponse({
        body: body,
        status: '200 OK',
        contentType: 'text/html'
      }));

    } else if(request.path === '/green' && request.method === 'GET'){

      const body = '<h1>green</h1>';

      socket.end(createResponse({
        body: body,
        status: '200 OK',
        contentType: 'text/html'
      }));

    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }

  });
});

module.exports = app;
