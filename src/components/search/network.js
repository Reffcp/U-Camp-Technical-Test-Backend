const express = require('express');
const router = express.Router();

router.get('/', require('./controller').search);

module.exports = router;