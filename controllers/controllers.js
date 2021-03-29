exports.validateSuccessMessage = (req, res) =>
  res.send({ message: "This user is valid!" });

exports.sanitizedSuccessMessage = (req, res) =>
  res.send(req.body);
