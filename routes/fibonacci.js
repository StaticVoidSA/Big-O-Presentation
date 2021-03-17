const express = require('express');
const router = express.Router();
const controller = require('../controllers/fibonacci');

// GET Requests
router.get('/exponential', controller.getExponential);
router.post('/exponential', controller.postExponential);

// POST Requests
router.get('/polynomial', controller.getPolynomial);
router.post('/polynomial', controller.postPolynomial);

module.exports = router;