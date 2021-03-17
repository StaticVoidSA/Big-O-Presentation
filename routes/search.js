const express = require('express');
const controller = require('../controllers/search');
const router = express.Router();

router.get('/search-methods', controller.getSearchMethods);

module.exports = router;