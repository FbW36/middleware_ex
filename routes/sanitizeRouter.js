const express = require('express');
const router = express.Router();
const { sanitizedSuccessMessage } = require('../controllers/userControllers');
const {sanitizerUser} = require('../middleware/sanitization');

router.route('/').put(sanitizerUser(), sanitizedSuccessMessage);

module.exports = router;
