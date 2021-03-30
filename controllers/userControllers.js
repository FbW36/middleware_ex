exports.validateSuccessMessage = (req, res) => {
    res.send({message: 'This user looks valid! 😄'})
};

exports.sanitizedSuccessMessage = (req, res) => {
    res.send(req.body);
}

