const express = require('express');
const config = require('./config');

const app = express();

require('./config/express')(app);
require('./routes')(app);

app.listen(config.port);
