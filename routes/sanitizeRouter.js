const express = require("express");
const app = express();
const router = express.Router();

//const { addUser } = require("../controllers/userController");
const {
  sanitizeUserName,
  sanitizeBands,
  sanitizeNumbers,
} = require("../middleware/sanitation");

//sanitizeUser
router.route("/").post(sanitizeUserName, sanitizeBands, sanitizeNumbers);

module.exports = router;
