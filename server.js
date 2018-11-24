const express = require('express');
const config = require('./config');
const logger = require('./logging');

const app = express();

require('./config/express')(app);
require('./routes')(app);

const server = app.listen(config.port);

server.on('error', (error) => {
  logger.error(error);

});

module.exports = app;
