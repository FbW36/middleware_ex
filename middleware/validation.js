const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
app.use(express.json());

exports.validateUserData = () => {
  return [
    body("firstName").exists().withMessage("FirstName is required"),
    body("lastName").trim().exists().withMessage("LastName is required"),
    body("age")
      .exists()
      .custom((value) => parseInt(value) > 18)
      .withMessage("You are too young, fuck off!"),
    body("fbw")
      .exists()
      .custom((value) => parseInt(value) === 36)
      .withMessage("Cannot validate user. User is not part of fbw36"),
    body("email")
      .exists()
      .isEmail()
      .withMessage("Your email address is not valid")
      .normalizeEmail(),
  ];
};

exports.sanitizeUserName = () => {
  return [
    body("firstName")
      .trim()
      .custom((value) => value[0].toUpperCase() + value.slice(1)),
    body("lastName")
      .trim()
      .custom((value) => value[0].toUpperCase() + value.slice(1)),
    body("favoriteBands").custom((value) => value.sort()),
    body("age").toInt(),
    body("fbw").toInt(),
  ];
};

// User Validation error handling

exports.validationErrorHandling = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  res.status(422).json({ errors: errors.array() });
};
