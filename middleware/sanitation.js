exports.sanitizeUserName = (req, res, next) => {
  console.log(
    "this name comes from the middleware ",
    req.body.firstName,
    req.body.lastName
  );

  if (
    /^[A-Z]{1}/.test(req.body.firstName) &&
    /^[A-Z]{1}/.test(req.body.lastName)
  )
    next();

  req.body.firstName =
    req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1);
  req.body.lastName =
    req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.slice(1);

  next();
};

exports.sanitizeBands = (req, res, next) => {
  console.log("this bands comes from the middleware ", req.body.favoriteBands);

  req.body.favoriteBands.sort();
  next();
};

exports.sanitizeNumbers = (req, res, next) => {
  req.body.age = parseInt(req.body.age);
  req.body.fbw = parseInt(req.body.fbw);

  const user = req.body;

  res.send(user);
};
