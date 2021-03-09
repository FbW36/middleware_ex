exports.validationResponse = (req, res) => {
    res.send({message: 'This user looks valid! 😄'})
};

exports.sanitizationResponse = (req, res) => {
    res.send(req.body);
}

