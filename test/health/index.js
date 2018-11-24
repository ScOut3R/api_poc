const request = require('supertest');

const app = require('../../server');

const url = '/health'

describe(url, function () {

  it('should respond with 200', function (done) {
    request(app)
    .get(url)
    .expect(200, done);
  });

});
