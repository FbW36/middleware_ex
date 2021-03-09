const { capitalizeFirst } = require('../helpers/capitalizeFirst');

const capitalizeNames = (req, res, next) => {
  const { firstName, lastName } = req.body;

  req.body = {
    ...req.body,
    firstName: capitalizeFirst(firstName),
    lastName: capitalizeFirst(lastName),
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
  req.body = { ...req.body, age: parsedAge, fbw: parsedClass };
  next();
};

module.exports = { capitalizeNames, sortFavoriteBands, toNumber };
