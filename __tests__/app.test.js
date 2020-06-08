const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  
  it('handles the / route with hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  }); 

  it('handles the /echo route with status code 200 and plain text with the request body', () => {

    return request(app)
      .post('/echo')
      .send('hello')
      .then(res => {
        expect(res.text).toEqual('hello');
      });
  });

}); 

//   it('returns the /red route with red as header', () => {
//     return request(app)
//       .get('/')
//       .then(res => {
//         expect(res.text).toEqual('<h1>red</h1>');
//       });
//   }); 

