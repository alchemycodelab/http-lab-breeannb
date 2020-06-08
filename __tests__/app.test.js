const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  
  it('handles the / route with hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('<h1>hi<h1>');
      });
    
  }); 


});
