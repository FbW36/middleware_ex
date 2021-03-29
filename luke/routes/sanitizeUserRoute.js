const express = require("express");
const router = express.Router();

const { sanitizeUser } = require("../controllers/sanitizeUser");
const {
  userSanitization,
  userSanitizationError,
} = require("../middleware/sanitization");

router.route("/").post(userSanitization(), userSanitizationError, sanitizeUser);

module.exports = router;
