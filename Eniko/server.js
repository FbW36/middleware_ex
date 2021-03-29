const express = require('express');
const cors = require('cors');
const app = express();
const low = require('lowdb');
const port = 5000;
const validateRouter = require('./routes/validateRouter');
const sanitizeRouter = require('./routes/sanitzeRouter');

app.listen(port, () => {
    console.log(`This app is listening at http://localhost:${port}`);
});

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/validateStudent', validateRouter);
app.use('/sanitizeStudent', sanitizeRouter);

app.use(function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send({
      error: {
        message: err.message,
      },
    });
  });