const express = require('express');
const controller = require('./metadata.controller');

const router = express.Router();

router.get('/', controller.metadata);

module.exports = router;
