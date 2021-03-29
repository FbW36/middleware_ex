const {body, validationResult} = require("express-validator")


exports.userValidationRules = () => {
  return [
    body('firstName').exists().withMessage('Where is your firstName'),
    body('lastName').exists().withMessage('Where is your lastName'),
    body('age')
      .exists()
      .custom((value) => parseInt(value) > 18)
      .withMessage('You are just a baby'),
    body('fbw')
      .exists()
      .custom((value) => value === '36')
      .withMessage('Get out of here'),
    // .custom((value) => {return value === '36'}).withMessage('Get out of here'),,
    body('email').exists().isEmail(),
  ];
};



  // User Validation Error Handling
exports.userValidationErrorHandling = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  res.status(422).json({ errors: errors.array() });
};