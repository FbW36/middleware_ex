const { capitalizeFirst } = require('../helpers/capitalizeFirst');

const capitalizeNames = (req, res, next) => {
  const { firstName, lastName } = req.body;
  const capitalizedFirst = capitalizeFirst(firstName);
  const capitalizedLast = capitalizeFirst(lastName);

  req.body = {
    ...req.body,
    firstName: capitalizedFirst,
    lastName: capitalizedLast,
  };
  next();
};

const sortFavoriteBands = (req, res, next) => {
  const { favoriteBands } = req.body;
  favoriteBands.sort((a, b) => a.localeCompare(b));
  next();
};

const toNumber = (req, res, next) => {
  const { age, fbw } = req.body;
  const parsedAge = Number.parseInt(age);
  const parsedClass = Number.parseInt(fbw);
  res.send({ ...req.body, age: parsedAge, fbw: parsedClass });
};

module.exports = { capitalizeNames, sortFavoriteBands, toNumber };
