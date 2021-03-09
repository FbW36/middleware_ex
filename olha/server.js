const express = require('express');
const app = express();
const PORT = 5000;

const validateRouter = require('./routers/validateRouter');
const sanitizeRouter = require('./routers/sanitizeRouter');



app.listen(PORT, () => console.log(`Listening at ${PORT}`));

app.use(express.json());



//* ROUTES

app.get('/', (req, res) => {
	res.send('Hello from the exercise!')
})

app.use(validateRouter);

app.use(sanitizeRouter);


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