exports.checkProps = (req, res, next) => {
	const user = req.body;

	if (user.firstName && user.lastName && user.favoriteBands && user.favoriteBands.length && user.age && user.fbw) next();
	else {
		const error = new Error('Cannot sanitize! Your user is incomplete!');
		error.status = 400;
		next(error);
	}
}

exports.capitalizeName = (req, res, next) => {
	const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();
	
	const user = req.body;
	req.body = {...user, firstName: capitalize(user.firstName), lastName: capitalize(user.lastName)};
	
	next();
}

exports.sortFavBands = (req, res, next) => {
	const user = req.body;
	const favBands = [...user.favoriteBands];
	req.body = {...user, favoriteBands: favBands.sort()};

	next();
}

exports.numerizeAgeNClass = (req, res, next) => {
	const user = req.body;
	req.body = {...user, age: Number(user.age), fbw: Number(user.fbw)}

	next();
}