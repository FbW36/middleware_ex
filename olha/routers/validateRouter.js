const express = require('express');
const router = express.Router();

const {
	validateProps,
	validateAge,
	validateFBW
} = require('../middleware/validators');

const { handleSuccess } = require('../controllers/controllers');

router.route('/validateUser')
	.post(validateProps, validateAge, validateFBW, handleSuccess)

module.exports = router;