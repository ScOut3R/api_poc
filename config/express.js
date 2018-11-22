const log4js = require('log4js');

const logger = require('../logging');

module.exports = function(app) {
  app.use(log4js.connectLogger(logger, { level: 'auto' }));
};
