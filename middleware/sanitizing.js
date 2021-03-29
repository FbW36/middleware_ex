exports.capitalizeUser = (req, res, next) => {
  const { firstName, lastName } = req.body;
  req.body.firstName = firstName[0].toUpperCase().concat(firstName.slice(1));
  req.body.lastName = lastName[0].toUpperCase().concat(lastName.slice(1));
  next();
};

exports.sortBands = (req, res, next) => {
  if (req.body.favoriteBands.length) {
    req.body.favoriteBands.sort();
    next();
  }
};
exports.strToNum = (req, res, next) => {
  const { age, fbw } = req.body;
  req.body.age = parseInt(age);
  req.body.fbw = parseInt(fbw);
  next();
};

const { body } = require("express-validator");

exports.sanitizeUser = () => {
  return [
    body("firstName")
      .trim()
      .customSanitizer((value) =>
        value[0].toUpperCase().concat(value.slice(1))
      ),
    body("lastName")
      .trim()
      .customSanitizer((value) =>
        value[0].toUpperCase().concat(value.slice(1))
      ),
    body("favoriteBands").customSanitizer((value) => value.sort()),
    body("age").toInt(),
    body("fbw").toInt(),
  ];
};
