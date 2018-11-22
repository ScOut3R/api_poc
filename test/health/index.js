const request = require('supertest');

const app = require('../../server');

describe('/health', function () {

  it('should respond with 200', function (done) {
    request(app)
    .get('/health')
    .expect(200, done);
  });

});
