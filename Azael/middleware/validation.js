exports.validateKeys = (req, res, next) => {
  console.log(`We are validating the object we received`);
  const { firstName, lastName, age, fbw, email } = req.body;

  if (!firstName || !lastName || !age || !fbw || !email) {
    const error = new Error(`Looks like you are missing the required fields`);
    error.status = 400;
    next(error);
  }

  next();
};

exports.isAdult = (req, res, next) => {
  console.log(`We are checking the age`);
  const { age } = req.body;

  if (parseInt(age) < 18) {
    const error = new Error(`You so young, get out of here.`);
    error.status = 400;
    next(error);
  }

  next();
};

exports.isFam = (req, res, next) => {
  console.log(`We are validating the object we received`);
  const { fbw } = req.body;

  if (fbw !== "36") {
    const error = new Error(`WHAT DO YOU MEAN YOU ARE NOT PART OF FBW36???`);
    error.status = 400;
    next(error);
  }

  next();
};
