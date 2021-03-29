exports.validationSanitizationErrorHandling = (req, res, next) => {
	const errors = validationResult(req);

	if (errors.isEmpty()) return next();

	res.status(422).json({ errors: errors.array() });
}