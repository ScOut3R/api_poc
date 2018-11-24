const root = require('./api/root');
const health = require('./api/health');
const metadata = require('./api/metadata');


module.exports = (app) => {
  app.use('/', root);
  app.use('/health', health);
  app.use('/metadata', metadata);
};
