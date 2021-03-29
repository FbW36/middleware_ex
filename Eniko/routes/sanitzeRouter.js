const express = require('express');
const router = express.Router();

const { sanitizeStudentResponse } = require('../controllers/myController');
const {
  sanitizeName,
  stringsToNumbers,
  sortBands,
} = require('../middleware/sanitization');

router.route('/').post(sanitizeName, stringsToNumbers, sortBands, sanitizeStudentResponse);

module.exports = router;