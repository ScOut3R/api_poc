# Node.js API Proof of Concept
[![Build Status](https://travis-ci.org/ScOut3R/api_poc.svg?branch=master)](https://travis-ci.org/ScOut3R/api_poc)

A [Node.js](https://nodejs.org) based proof of concept API to demonstrate [Express](https://expressjs.com) for the HTTP API, [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/) for containerisation, [Mocha](https://mochajs.org/) for testing and [Travis CI](https://travis-ci.org/) for continuos integration.


## API

The API is an HTTP API. The listening port is configurable via the `PORT` environment variable.

### Endpoints

The API implements the following endpoints:

* `/`: default response
* `/health`: returns HTTP code _200_ if API is healthy
* `/metadata`: returns metadata (version, description) of the API

### Deployment

The API has been prepared to be deployed in a Docker based environment. The `Dockerfile` defines the steps to build a Docker image bundled with depenencies. The `docker-compose.yaml` file has a service definition to build the Docker image and deploy it on a Docker Engine.

Deploy API:
```
docker-compose up -d
```

Force rebuild image:
```
docker-compose rebuild --no-cache api
```

Monitor logs:
```
docker-compose logs -f
```

### Testing

The code can be tested locally via `npm test`, but it would require Node.js to be available with all the NPM dependencies for the API.

To keep your local environment clean you can use Docker to run the tests for you:
```
docker-compose api run npm test
```

### Known issues

* **API access is not secured**. Authentication and authorization is missing.
* **API access it not encrypted**. The interface listens on HTTP, so an SSL reverse proxy is highly recommended for any deployments.
* **Deployment is not prepared to scale**. The Docker Compose service definition deploys a single API instance. By using Docker Swarm as the target platform the configuration could be updated to deploy it as a scalable service.
