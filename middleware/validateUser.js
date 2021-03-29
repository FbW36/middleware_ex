exports.checkUser =(req, res, next) => {
    const {firstName, lastName, age, fbw, email} = req.body
    if(firstName && lastName && age && fbw && email) next()
    else {
        const error = new Error("Your fields are not completed!")
        error.status = 400
        next(error)
    }
}

exports.validateAge =(req, res, next) => {
    const {age} = req.body
    if(Number(age) < 18){
        const error = new Error("We can not validate your user. They are  below 18 years of age")
        error.status = 400
        next(error)
    }
    next()
}

exports.validateFbw =(req, res, next) => {
    const {fbw} = req.body
    if(Number(fbw) != 36){
        const error = new Error("We can not validate your user. They are not a member of FBW36")
        error.status = 400
        next(error)
    }
    next()
}

