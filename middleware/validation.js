const { body, validationResult } = require("express-validator");

exports.validateUserRules = () => {
  return [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("age")
      .isInt({ min: 18, allow_leading_zeroes: false })
      .withMessage("Wrong age!"),
    body("fbw").isInt({ gt: 35, lt: 37 }).withMessage("You get out!"),
    body("email").trim().isEmail().withMessage("Invalid password format"),
  ];
};
exports.validateUserErrorHandling = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  res.status(422).send({ errors: errors.array() });
};
