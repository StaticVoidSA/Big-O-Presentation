const express = require('express');
const router = express.Router();
const controller = require('../controllers/sum');

router.get('/getSums', controller.getSums);

module.exports = router;