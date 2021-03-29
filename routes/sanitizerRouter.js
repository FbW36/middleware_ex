const express = require("express");
const { sanitizedSuccessMessage } = require("../controllers/controllers");
const router = express.Router();
const { sanitizeUser } = require("../middleware/sanitizing");

router.route("/").put(sanitizeUser(), sanitizedSuccessMessage);

module.exports = router;
