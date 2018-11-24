const request = require('supertest');

const app = require('../../../server');

const url = '/health';

describe(url, () => {

  it('should respond with 200', (done) => {
    request(app)
    .get(url)
    .expect(200, done);
  });

});
