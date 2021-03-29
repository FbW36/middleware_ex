const express = require("express");
const router = express.Router();

const { validateSuccessMessage } = require("../controllers/controllers");

const {
  validateUserRules,
  validateUserErrorHandling,
} = require("../middleware/validation");

router
  .route("/")
  .post(validateUserRules(), validateUserErrorHandling, validateSuccessMessage);

module.exports = router;
