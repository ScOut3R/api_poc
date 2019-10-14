const root = require('./api/root');
const health = require('./api/health');
const status = require('./api/status');


module.exports = (app) => {
  app.use('/', root);
  app.use('/health', health);
  app.use('/status', status);
};
