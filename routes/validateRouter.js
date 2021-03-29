const express = require('express')
const router = express.Router()

const { validateResponse} = require('../controller/userController')
const {validationRules, validationErrorHandling} = require('../middleware/validateUser')

router.route('/').post(validationRules(), validationErrorHandling, validateResponse)

module.exports = router