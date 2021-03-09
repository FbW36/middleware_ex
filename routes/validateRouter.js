const express = require('express');
const router = express.Router();
const { validationResponse } = require('../controllers/userControllers');
const { validateKeys, isAdult, isFam } = require('../midleware/validation');

router.route('/').post(validateKeys, isAdult, isFam, validationResponse);

module.exports = router;
