const express = require('express');
const router = express.Router();

const {
	validationErrorHandling,
	validationRules
} = require('../middleware/validators');

const { handleSuccess } = require('../controllers/controllers');

router.route('/validateUser')
	.post(validationRules(), 	validationErrorHandling, handleSuccess)

module.exports = router;