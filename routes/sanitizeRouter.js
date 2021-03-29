const express = require("express");
const { addUser } = require("../controllers/userController");
const app = express();
const router = express.Router();

const {
  sanitizeUserName,
  validationErrorHandling,
} = require("../middleware/validation");

//sanitizeUser
router.route("/").post(sanitizeUserName(), validationErrorHandling, addUser);

module.exports = router;
