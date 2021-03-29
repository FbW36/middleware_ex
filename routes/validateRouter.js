const express = require("express");
const { addUser } = require("../controllers/userController");
const app = express();
const router = express.Router();

const {
  validateUserData,
  validationErrorHandling,
} = require("../middleware/validation");

//ValidateUser
router.route("/").post(validateUserData(), validationErrorHandling, addUser);

module.exports = router;
