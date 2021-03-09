exports.userDataComplete = (req, res, next) => {
  console.log("this data comes from the middleware ", req.body);

  const user = req.body;
  const {
    firstName,
    lastName,
    age,
    fbw,
    profession,
    favoriteBands,
    email,
  } = user;

  if (
    firstName &&
    lastName &&
    age &&
    fbw &&
    profession &&
    favoriteBands &&
    email
  ) {
    next();
  } else {
    //we will create an error with a message
    let error = new Error(
      "The User data is not complete, please fill out all the fields."
    );
    error.status = 400;
    //and call the error handler
    next(error);
  }
};

exports.validateUserAge = (req, res, next) => {
  console.log("this age comes from the middleware ", req.body.age);
  const age = parseInt(req.body.age);
  if (age >= 18) {
    next();
  } else {
    let error = new Error("Cannot validate user. The Dude is too young.");
    error.status = 400;
    next(error);
  }
};

exports.validateFbw = (req, res, next) => {
  console.log("this fbw comes from the middleware ", req.body.fbw);
  const fbw = parseInt(req.body.fbw);
  if (fbw === 36) {
    res.send({ message: `This user is valid - yay dude` });
  } else {
    let error = new Error("Cannot validate user. User is not part of fbw36");
    error.status = 400;
    next(error);
  }
};
