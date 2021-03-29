const express = require('express');
const router = express.Router();
const { validationResponse } = require('../controllers/userControllers');
const {
  userValidationRules,
  userValidationErrorHandling,
} = require('../midleware/validation');

router
  .route('/')
  .post(userValidationRules(), userValidationErrorHandling, validationResponse);

module.exports = router;
