const successMessage = (req, res) =>
  res.send({
    message: 'This user is valid!',
  });

module.exports = { successMessage };
