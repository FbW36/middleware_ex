const express = require("express");
const { sanitizedSuccessMessage } = require("../controllers/controllers");

const {
  capitalizeUser,
  sortBands,
  strToNum,
} = require("../middleware/sanitizing");

const router = express.Router();

router
  .route("/")
  .post(capitalizeUser, sortBands, strToNum, sanitizedSuccessMessage);

module.exports = router;
