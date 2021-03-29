const express = require('express')
const router = express.Router()
const {firstName, lastName, age, fbw, email} = require('../controllers/usersControllers')
const {validateUser} = require('../middleware/validation')

//Users
router.route("/").get(getUser).post(validateUser, addUser)
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)
module.exports = router;