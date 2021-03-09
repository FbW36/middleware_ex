const express = require("express");
const router = express.Router();

const { validateSuccessMessage } = require("../controllers/controllers");

const {
  checkLoginData,
  checkUsersClass,
  checkUserAge,
} = require("../middleware/validation");

router
  .route("/")
  .post(checkLoginData, checkUserAge, checkUsersClass, validateSuccessMessage);

module.exports = router;
