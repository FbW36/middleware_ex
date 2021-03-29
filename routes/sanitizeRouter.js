const express = require('express')
const router = express.Router()

const { sanitizeResponse } = require('../controller/userController')
const {sanitizationRules, sanitizationErrorHandling} = require('../middleware/sanitizeUser')

router.route('/').post(sanitizationRules(), sanitizationErrorHandling, sanitizeResponse)

module.exports = router