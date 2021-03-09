const successMessage = (req, res) =>
  res.send({
    message: 'This user is valid!',
  });

const successSanitization = (req, res) => res.send(req.body);

module.exports = { successMessage, successSanitization };
