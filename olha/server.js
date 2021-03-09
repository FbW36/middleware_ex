const express = require('express');
const app = express();
const PORT = 5000;

const {
	validateProps,
	validateAge,
	validateFBW
} = require('./middleware/validators');

const {
	checkProps,
	capitalizeName,
	sortFavBands,
	numerizeAgeNClass
} = require('./middleware/sanitizers');


app.listen(PORT, () => console.log(`Listening at ${PORT}`));

app.use(express.json());


//* CONTROLLERS

const handleSuccess = (req, res) => {
	res.send({ message: "This user is valid!" })
}

const outputUser = (req, res) => {
	console.log(req.body);
	const user = req.body;
	res.send(user);
}


//* ROUTES

app.get('/', (req, res) => {
	res.send('Hello from the exercise!')
})

app.post('/validateUser', validateProps, validateAge, validateFBW, handleSuccess)

app.post('/sanitizeUser', checkProps, capitalizeName, sortFavBands, numerizeAgeNClass, outputUser)


//* ERROR HANDLING

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500).send({
		error: {
			message: err.message,
			status: err.status
		}
	})
})