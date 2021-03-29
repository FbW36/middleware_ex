const {
  successMessage,
  successSanitization,
} = require('../controllers/Controllers');

const {
  capitalizeNames,
  sortFavoriteBands,
  toNumber,
} = require('../middleware/sanitizeUser');

const {
  validateFields,
  isAdult,
  isFBW36,
} = require('../middleware/validateUser');

const routes = (app) => {
  app
    .route('/validateUser')
    .post(validateFields, isAdult, isFBW36, successMessage);

  app
    .route('/sanitizeUser')
    .get(capitalizeNames, sortFavoriteBands, toNumber, successSanitization);
};

module.exports = routes;
