const { body, validationResult } = require('express-validator');


exports.validationRules = () => {
	return [
		body('firstName')
			.exists()
			.withMessage('You need a first name'),
		body('lastName')
			.exists()
			.withMessage('You need a last name'),
		body('age')
			.exists()
			.withMessage('Age is required')
			.isNumeric()
			.withMessage('Age should be a number')
			.custom(value => {
				return Number(value) >= 18;
			})
			.withMessage('You are too young!'),
		body('fbw')
			.exists()
			.withMessage('Which FBW are you in?')
			.isNumeric()
			.withMessage('FBW should be a number')
			.custom(value => {
				return Number(value) === 36;
			})
			.withMessage('You are not one of us!!'),
		body('email')
			.exists()
			.withMessage('Hellooo, your email?')
			.isEmail()
			.withMessage('Valid email, please!')
	]
}
