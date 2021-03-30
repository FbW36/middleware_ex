const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const validateRouter = require('./routes/validateRouter');
const sanitizeRouter = require('./routes/sanitizeRouter');

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// Express middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/validateUser', validateRouter);
app.use('/sanitizeUser', sanitizeRouter);


// Error handling 
app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
