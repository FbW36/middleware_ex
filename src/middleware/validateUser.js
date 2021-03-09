const validateFields = (req, res, next) => {
  const user = req.body;
  const requiredKeys = ['firstName', 'lastName', 'age', 'fbw', 'email'];
  const requestKeys = Object.keys(user);

  const isValid = requiredKeys.every((key) => requestKeys.includes(key));

  if (!isValid) {
    const error = new Error("you don't have all the requires properties");
    error.status = 400;
    next(error);
  }

  next();
};

const isAdult = (req, res, next) => {
  const { age } = req.body;

  if (Number.parseInt(age) < 18) {
    const error = new Error('No minors allowed');
    error.status = 400;
    next(error);
  }
  next();
};

const isFBW36 = (req, res, next) => {
  const { fbw } = req.body;

  if (fbw !== '36') {
    const error = new Error('You are not part of our class');
    error.status = 400;
    next(error);
  }
  next();
};

module.exports = { validateFields, isAdult, isFBW36 };
