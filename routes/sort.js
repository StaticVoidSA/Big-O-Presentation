const express = require('express');
const router = express.Router();
const controller = require('../controllers/sort');

router.get('/bubbleSort', controller.bubbleSort);

router.get('/defaultSort', controller.defaultSort);

router.get('/selectionSort', controller.selectionSort);

module.exports = router;