const {body, validationResult} = require('express-validator')

exports.userSanitizationRules = () => {
  return [
    body('firstName')
      .toLowerCase()
      .customSanitizer((value) => value[0].toUpperCase() + value.slice(1)),
    body('lastName')
      .toLowerCase()
      .customSanitizer((value) => value[0].toUpperCase() + value.slice(1)),
    body('age').toInt(),
    body('fbw').toInt(),
    body('favoriteBands').customSanitizer((value) => value.sort()),
  ];
};

// User sanitization Error Handling
exports.userValidationErrorHandling = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  res.status(422).json({ errors: errors.array() });
};