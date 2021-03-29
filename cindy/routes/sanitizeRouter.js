const express = require('express');
const router = express.Router();
const { sanitizationResponse } = require('../controllers/usersControllers');
const {
  userSanitizationRules,
  userValidationErrorHandling,
} = require('../middleware/sanitization');

router
  .route('/')
  .post(userSanitizationRules(), userValidationErrorHandling, sanitizationResponse);

module.exports = router;