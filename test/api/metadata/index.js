const request = require('supertest');

const app = require('../../../server');
const version = require('../../../package.json').version;
const description = require('../../../package.json').description;

const url = '/metadata';

describe(url, function () {

  it('should respond with 200', function (done) {
    request(app)
    .get(url)
    .expect(200, done);
  });

  it('should respond with JSON', function (done) {
    request(app)
    .get(url)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('should return metadata', function (done) {
    request(app)
    .get(url)
    .expect(200)
    .then(function (response) {
      response.body.api_poc[0].version.should.equal(version);
      response.body.api_poc[0].description.should.equal(description);
      done();
    })
    .catch(function (error) {
      done(error);
    });
  });
});


