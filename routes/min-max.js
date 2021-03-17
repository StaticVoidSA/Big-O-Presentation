const express = require('express');
const router = express.Router();
const controller = require('../controllers/min-max');

router.get('/getMinMax', controller.getMinMax);
router.post('/postMinMax', controller.postMinMax);

module.exports = router;