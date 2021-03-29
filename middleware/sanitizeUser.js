const {body, validationResult} = require('express-validator')

exports.sanitizationRules = () => {
    return [
        body("firstName")
        .toLowerCase()
        .custom(value => value[0].toUpperCase() + value.slice(1)),
        body("lastName")
        .toLowerCase()
        .custom(value => value[0].toUpperCase() + value.slice(1)),
        body('age').toInt(),
        body('fbw').toInt(),
        body('favoriteBands').custom(value => value.sort()),
    ]
}

exports.sanitizationErrorHandling = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()) return next()
    res.status(422).json({errors: errors.array()})
}