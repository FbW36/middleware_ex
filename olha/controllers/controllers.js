exports.handleSuccess = (req, res) => {
	res.send({ message: "This user is valid!" })
}

exports.outputUser = (req, res) => {
	console.log(req.body);
	const user = req.body;
	res.send(user);
}