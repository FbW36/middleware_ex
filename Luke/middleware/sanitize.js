exports.editNames = (req, res, next) => {
  const { firstName, lastName } = req.body;

  const namesArr = [firstName, lastName];
  const editedNamesArr = namesArr.map((name) => {
    const firstLetter = name[0].toUpperCase();
    const capitalizedName = name.replace(name[0], firstLetter);
    return capitalizedName;
  });

  req.body.firstName = editedNamesArr[0];
  req.body.lastName = editedNamesArr[1];
  next();
};

exports.sortFavoriteBands = (req, res, next) => {
  const { favoriteBands } = req.body;
  req.body.favoriteBands = favoriteBands.sort();
  next();
};

exports.ageAndFbwToNumbers = (req, res, next) => {
  const { age, fbw } = req.body;
  req.body.age = Number(age);
  req.body.fbw = Number(fbw);
  next();
};
