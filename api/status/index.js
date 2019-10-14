const express = require('express');
const controller = require('./status.controller');

const router = express.Router();

router.get('/', controller.status);

module.exports = router;
