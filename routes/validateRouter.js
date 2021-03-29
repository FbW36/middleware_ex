const express = require('express')
const router = express.Router()

const { validateResponse} = require('../controller/userController')
const {checkUser, validateAge, validateFbw} = require('../middleware/validateUser')

router.route('/').post( checkUser, validateAge, validateFbw, validateResponse)

module.exports = router