module.exports = (app) => {
  app.use('/', require('./api/root'));
  app.use('/health', require('./api/health'));
  app.use('/metadata', require('./api/metadata'));
}
