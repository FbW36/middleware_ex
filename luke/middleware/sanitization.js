const { body, validationResult } = require("express-validator");

exports.userSanitization = () => {
  return [
    body("firstName").customSanitizer(
      (value) => `${value[0].toUpperCase()}${value.slice(1)}`
    ),
    body("lastName").customSanitizer(
      (value) => `${value[0].toUpperCase()}${value.slice(1)}`
    ),
    body("age").toInt(),
    body("fbw").toInt(),
    body("favoriteBands").customSanitizer((value) => value.sort()),
  ];
};

exports.userSanitizationError = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const message = errors.array().map((message) => {
    return message.msg;
  });

  res.status(422).json({ message: message[0] });
};
