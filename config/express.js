const log4js = require('log4js');

const config = require('../config');
const logger = require('../logging');

module.exports = (app) => {
  if (config.env !== 'test') {
    app.use(log4js.connectLogger(logger, {'level': 'auto'}));
  }
};
