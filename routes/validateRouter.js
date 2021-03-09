const express = require("express");
const app = express();
const router = express.Router();

//const { addUser } = require("../controllers/userController");
const {
  userDataComplete,
  validateUserAge,
  validateFbw,
} = require("../middleware/validation");

//ValidateUser
router.route("/").post(userDataComplete, validateUserAge, validateFbw);

module.exports = router;
