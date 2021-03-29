const { body, validationResult } = require('express-validator');

const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

exports.sanitizationRules = () => {
	return [
		body('firstName')
			.exists()
			.trim()
			.customSanitizer(value => capitalize(value)),
		body('lastName')
			.exists()
			.trim()
			.customSanitizer(value => capitalize(value)),
		body('email')
			.exists()
			.trim()
			.withMessage('Hellooo, your email?')
			.isEmail()
			.withMessage('Valid email, please!'),
		body('age')
			.exists()
			.toInt(),
		body('fbw')
			.exists()
			.toInt(),
		body('favoriteBands')
			.exists()
			.customSanitizer(value => {
				return value.sort()
			})
	]
}

exports.sanitizationErrorHandling = (req, res, next) => {
	const errors = validationResult(req);

	if (errors.isEmpty()) return next();

	res.status(422).json({ errors: errors.array() });
}