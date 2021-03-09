const express = require('express');
const router = express.Router();

const {
	checkProps,
	capitalizeName,
	sortFavBands,
	numerizeAgeNClass
} = require('../middleware/sanitizers');

const { outputUser } = require('../controllers/controllers');


router.route('/sanitizeUser').post(checkProps, capitalizeName, sortFavBands, numerizeAgeNClass, outputUser);

module.exports = router;