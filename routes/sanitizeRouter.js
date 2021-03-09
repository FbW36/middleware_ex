const express = require('express');
const router = express.Router();
const { sanitizationResponse } = require('../controllers/userControllers');
const {
  sanitizeName,
  stringsToNumbers,
  sortBands,
} = require('../midleware/sanitization');

router.route('/').post(sanitizeName, stringsToNumbers, sortBands, sanitizationResponse);

module.exports = router;
