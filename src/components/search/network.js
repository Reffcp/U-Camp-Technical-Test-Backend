const express = require('express');
const router = express.Router();
const cache = require('../../middlewares/cache');

router.get('/', cache.cache(2), require('./controller').search);

module.exports = router;