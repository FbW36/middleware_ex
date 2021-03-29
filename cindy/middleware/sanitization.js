exports.sanitizeName = (req, res, next) => {
    const { firstName, lastName } = req.body;
    console.log(`We are validating the object we received`);
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    next();
  };

  exports.stringsToNumbers = (req, res, next) => {
    const { age, fbw } = req.body;
    age = parseInt(req.body.age);
    fbw = parseInt(req.body.fbw);

    next();
  };

  exports.sortBands = (req, res, next) => {
    const { favoriteBands } = req.body;
    favoriteBands.sort();
    next();
  };