exports.validationResponse = (req, res) => {
  res.send({ message: 'This user looks valid! :smile: ' });
};

exports.sanitizationResponse = (req, res) => {
  res.send(req.body);
};
