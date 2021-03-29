const express = require('express');
const router = express.Router();

const {
	sanitizationRules
} = require('../middleware/sanitizers');
const { validationSanitizationErrorHandling } = require('../middleware/errorHandling');

const { outputUser } = require('../controllers/controllers');


router.route('/sanitizeUser').post(sanitizationRules(), validationSanitizationErrorHandling, outputUser);

module.exports = router;