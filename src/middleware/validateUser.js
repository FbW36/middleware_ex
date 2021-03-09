const { buildErrorMessage } = require('../helpers/buildErroMessage');

const validateFields = (req, res, next) => {
  const user = req.body;
  const requiredKeys = ['firstName', 'lastName', 'age', 'fbw', 'email'];
  const requestKeys = Object.keys(user);

  const isValid = requiredKeys.every((key) => requestKeys.includes(key));

  if (!isValid) {
    next(buildErrorMessage("you don't have all the requires properties"));
  }

  next();
};

const isAdult = (req, res, next) => {
  const { age } = req.body;

  if (Number.parseInt(age) < 18) {
    next(buildErrorMessage('No minors allowed'));
  }
  next();
};

const isFBW36 = (req, res, next) => {
  const { fbw } = req.body;

  if (fbw !== '36') {
    next(buildErrorMessage('You are not part of our class'));
  }
  next();
};

module.exports = { validateFields, isAdult, isFBW36 };
