const express = require("express");
const router = express.Router();

const { validateUser } = require("../controllers/validateUser");

const {
  checkUserInput,
  checkAge,
  checkFbw,
} = require("../middleware/validation");

// validation
router.route("/").post(checkUserInput, checkAge, checkFbw, validateUser);

module.exports = router;
