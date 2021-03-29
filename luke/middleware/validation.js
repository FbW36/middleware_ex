const { body, validationResult } = require("express-validator");

exports.userValidationRules = () => {
  return [
    body("firstName")
      .trim()
      .notEmpty()
      .withMessage("We can not validate your user. All fields are required."),
    body("lastName")
      .trim()
      .notEmpty()
      .withMessage("We can not validate your user. All fields are required."),
    body("age")
      .custom((value) => {
        const res = Number(value) >= 18;
        return res;
      })
      .withMessage(
        "We can not validate your user. The are below 18 years of age."
      ),
    body("fbw")
      .custom((value) => {
        const res = value === "36";
        return res;
      })
      .withMessage(
        "We can not validate your user. You are not a member of FBW36."
      ),
    body("email").exists().isEmail(),
  ];
};

exports.userValidationError = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const message = errors.array().map((message) => {
    return message.msg;
  });

  res.status(422).json({ message: message[0] });
};
