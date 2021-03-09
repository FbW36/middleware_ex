exports.sanitizeUserName = (req, res, next) => {
  console.log(
    "this name comes from the middleware ",
    req.body.firstName,
    req.body.lastName
  );

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (/^[A-Z]{1}/.test(firstName) && /^[A-Z]{1}/.test(lastName)) next();

  const sanitizedFirstname =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const sanitizedLastname =
    lastName.charAt(0).toUpperCase() + lastName.slice(1);

  req.body.firstName = sanitizedFirstname;
  req.body.lastName = sanitizedLastname;

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
