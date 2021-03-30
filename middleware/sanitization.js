const {body} = require('express-validator');
exports.sanitizerUser = () => {
  return [
    body("firstName")
    .trim()
    .customSanitizer(value => value[0].toUpperCase().contact(value.slice(1))),
    body("lastName")
    .trim()
    .customSanitizer(value => value[0].toUpperCase().contact(value.slice(1))),
    body('favoriteBands').customSanitizer(value => value.sort()),
    body('age').toInt(),
    body('fbw').toInt(),
  ]
};

