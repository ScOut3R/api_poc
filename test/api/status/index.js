const request = require('supertest');
const git = require('git-last-commit');

const app = require('../../../server');
const {description, version} = require('../../../package.json');

const url = '/status';

describe(url, () => {

  it('should respond with 200', (done) => {
    request(app)
    .get(url)
    .expect(200, done);
  });

  it('should respond with JSON', (done) => {
    request(app)
    .get(url)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/u)
    .expect(200, done);
  });

  it('should return status', (done) => {
    git.getLastCommit((error, commit) => {
      if (error) {
        done(error);
      }

      request(app)
      .get(url)
      .expect(200)
      .then((response) => {
        response.body.api_poc[0].version.should.equal(version);
        response.body.api_poc[0].description.should.equal(description);
        response.body.api_poc[0].lastcommitsha.should.equal(commit.shortHash);
        done();
      })
      .catch((error) => {
        done(error);
      });
    });
  });
});


