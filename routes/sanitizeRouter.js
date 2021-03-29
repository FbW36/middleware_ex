const express = require('express');
const router = express.Router();
const { sanitizationResponse } = require('../controllers/userControllers');
const {
  userSanitizationRules,
  userValidationErrorHandling,
} = require('../midleware/validation');

router
  .route('/')
  .post(userSanitizationRules(), userValidationErrorHandling, sanitizationResponse);

module.exports = router;
