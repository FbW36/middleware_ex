const express = require('express')
const router = express.Router()

const { sanitizeResponse } = require('../controller/userController')
const {checkLetter, sortBands, handleNumber} = require('../middleware/sanitizeUser')

router.route('/').post(checkLetter, sortBands, handleNumber, sanitizeResponse)

module.exports = router