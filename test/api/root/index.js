const request = require('supertest');

const app = require('../../../server');

const url = '/';

describe(url, () => {

  it('should respond with 200', (done) => {
    request(app)
    .get(url)
    .expect(200, done);
  });

  it('should return "Hello World!"', (done) => {
    request(app)
    .get(url)
    .expect(200)
    .then((response) => {
      response.text.should.equal('Hello World!');
      done();
    })
    .catch((error) => {
      done(error);
    });
  });

});

