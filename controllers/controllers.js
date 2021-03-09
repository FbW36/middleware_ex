exports.validateSuccessMessage = (req, res) =>
  res.send({ message: "User successfully validated!" });

exports.sanitizedSuccessMessage = (req, res) =>
  res.send(req.bodyI);
