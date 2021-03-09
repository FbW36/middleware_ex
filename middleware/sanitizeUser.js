exports.checkLetter = (req, res, next) => {
    const {firstName, lastName} = req.body
    req.body.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    req.body.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    next()
}


exports.sortBands = (req, res, next) => {
    req.body.favoriteBands.sort();
  
    next()
}

exports.handleNumber = (req, res, next) => {
    const {age, fbw} = req.body
    req.body.age = Number(age) 
    req.body.fbw = Number(fbw)
    next()
}