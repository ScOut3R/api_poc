const express = require('express');
const controller = require('./root.controller');

const router = express.Router();

router.get('/', controller.root);

module.exports = router;
