const express = require('express');
const router = express.Router();
const { validateStudentResponse } = require('../controllers/myController');
const { validateKeys, isAdult, isFam } = require('../middleware/validation');

router.route('/').post(validateKeys, isAdult, isFam, validateStudentResponse);

module.exports = router;