const { body, validationResult} = require('express-validator')

exports.validationRules = () => {
    return[
        body('firstName')
        .exists()
        .withMessage("Fistname is required"),
        body('lastName')
        .exists()
        .withMessage("Lastname is required"),
        body('email')
        .isEmail()
        .withMessage("Your email address is not valid"),
        body("fbw")
        .exists()
        .withMessage("fbw field is required")
        .custom(value => value === '36')
        .withMessage("We can not validate your user. They are not a member of FBW36"),
        body('"age')
        .exists()
        .withMessage("age field is required")
        .custom(value => parseInt(value) > 18)
        .withMessage("We can not validate your user. They are  below 18 years of age"),
    ]
}

exports.validationErrorHandling = (req, res, next) => {
    const errors = validationResult(req)
    if(errors.isEmpty()) return next()
    res.status(422).json({errors:errors.array()})
}