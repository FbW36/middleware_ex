const express = require("express");
const router = express.Router();

const { validationResponse } = require("../controllers/usersControllers");
const { validateKeys, isAdult, isFam } = require("../middleware/validation");

router.route("/").post(validateKeys, isAdult, isFam, validationResponse);

module.exports = router;