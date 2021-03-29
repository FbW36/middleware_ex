const express = require("express");
const router = express.Router();

const { sanitizationResponse } = require("../controllers/usersControllers");

const {
  sanitizeName,
  stringsToNumbers,
  sortBands,
} = require("../middleware/sanitization");

router
  .route("/")
  .post(sanitizeName, stringsToNumbers, sortBands, sanitizationResponse);

module.exports = router;