const request = require('supertest');

const app = require('../../../server');

const url = '/';

describe(url, function () {

  it('should respond with 200', function (done) {
    request(app)
    .get(url)
    .expect(200, done);
  });

  it('should return "Hello World!"', function (done) {
    request(app)
    .get(url)
    .expect(200)
    .then(function (response) {
      response.text.should.equal('Hello World!');
      done();
    })
    .catch(function (error) {
      done(error);
    });
  });

});

