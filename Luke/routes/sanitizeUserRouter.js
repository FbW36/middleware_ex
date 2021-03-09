const express = require("express");
const router = express.Router();

const { sanitizeUser } = require("../controllers/sanitizeUser");

const {
  editNames,
  sortFavoriteBands,
  ageAndFbwToNumbers,
} = require("../middleware/sanitize");

// sanitize
router
  .route("/")
  .post(editNames, sortFavoriteBands, ageAndFbwToNumbers, sanitizeUser);

module.exports = router;
