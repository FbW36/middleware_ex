const express = require('express');
const router = express.Router();
const { validationResponse } = require('../controllers/usersControllers');
const {
  userValidationRules,
  userValidationErrorHandling,
} = require('../middleware/validation');

router
  .route('/')
  .post(userValidationRules(), userValidationErrorHandling, validationResponse);

module.exports = router;