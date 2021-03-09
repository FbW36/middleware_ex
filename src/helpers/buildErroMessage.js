const buildErrorMessage = (errorString) => {
  const error = new Error(errorString);
  error.status = 400;
  return error;
};

module.exports = { buildErrorMessage };
