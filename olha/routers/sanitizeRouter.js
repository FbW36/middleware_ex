const express = require('express');
const router = express.Router();

const {
	sanitizationRules,
	sanitizationErrorHandling
} = require('../middleware/sanitizers');

const { outputUser } = require('../controllers/controllers');


router.route('/sanitizeUser').post(sanitizationRules(), sanitizationErrorHandling, outputUser);

module.exports = router;