exports.validateProps = (req, res, next) => {
	const user = req.body;

	if (user.firstName && user.lastName && user.age && user.fbw && user.email) next();
	else {
		const error = new Error('Your user is incomplete!');
		error.status = 400;
		next(error);
	}
}

exports.validateAge = (req, res, next) => {
	const { age } = req.body;

	if (Number(age) >= 18) next();
	else {
		const error = new Error('We can not validate your user. They are  below 18 years of age');
		error.status = 400;
		next(error);
	}
}

exports.validateFBW = (req, res, next) => {
	const { fbw } = req.body;

	if (Number(fbw) === 36) next();
	else {
		const error = new Error('We can not validate your user. They are not a member of FBW36');
		error.status = 400;
		next(error);
	}
}