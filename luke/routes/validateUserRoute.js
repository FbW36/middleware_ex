const express = require("express");
const router = express.Router();

const { validateUser } = require("../controllers/validateUser");
const {
  userValidationRules,
  userValidationError,
} = require("../middleware/validation");

router.route("/").post(userValidationRules(), userValidationError, validateUser);

module.exports = router;
