exports.checkUserInput = (req, res, next) => {
  const { firstName, lastName, age, fbw, email } = req.body;
  if (firstName && lastName && age && fbw && email) next();
  else {
    const error = new Error(
      `We can not validate your user. They must have a valid first name, last name, age, fwb class and email address.`
    );
    error.status = 400;
    next(error);
  }
};

exports.checkAge = (req, res, next) => {
  const { age } = req.body;
  if (Number(age) >= 18) next();
  else {
    const error = new Error(
      `We can not validate your user. They must be at least 18 years old.`
    );
    error.status = 400;
    next(error);
  }
};

exports.checkFbw = (req, res, next) => {
  const { fbw } = req.body;
  if (Number(fbw) === 36) next();
  else {
    const error = new Error(
      `We can not validate your user. They are not part of fbw 36.`
    );
    error.status = 400;
    next(error);
  }
};
