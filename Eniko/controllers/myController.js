exports.validateStudentResponse = (req, res) => {
    res.send({ message: "Valid user" });
};

exports.sanitizeStudentResponse = (req, res) => {
    res.send(req.body);
}
