const express = require('express');
const router = express.Router();

const {
	validationErrorHandling,
	validationRules
} = require('../middleware/validators');
const { validationSanitizationErrorHandling } = require('../middleware/errorHandling');

const { handleSuccess } = require('../controllers/controllers');

router.route('/validateUser')
	.post(validationRules(), 	validationSanitizationErrorHandling, handleSuccess)

module.exports = router;