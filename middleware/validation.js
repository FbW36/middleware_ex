exports.checkLoginData = (req, res, next) => {
  const user = req.body;
  if (user.firstName && user.lastName && user.age && user.fbw && user.email){
   return next();
  }
    
  else {
    const error = new Error("Login data incomplete!");
    error.status = 401;
    next(error);
  }
};

exports.checkUserAge = (req, res, next) => {
  if (req.body.age >= 18) next();
  else {
    const error = new Error("User is under 18");
    error.status = 403;
    next(error);
  }
};
exports.checkUsersClass = (req, res, next) => {
  if (req.body.fbw == "36") next();
  else {
    const error = new Error("Wrong class");
    error.status = 403;
    next(error);
  }
};
