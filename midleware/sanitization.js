exports.sanitizeName = (req, res, next) => {
  console.log(`We are validating the object we received`);
  req.body.firstName =
    req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1);
  req.body.lastName =
    req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.slice(1);
  next();
};

exports.stringsToNumbers = (req, res, next) => {
  req.body.age = parseInt(req.body.age);
  req.body.fbw = parseInt(req.body.fbw);

  next();
};

exports.sortBands = (req, res, next) => {
  req.body.favoriteBands.sort();
  next();
};
