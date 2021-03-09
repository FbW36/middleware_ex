const express = require('express');
const app = express();
const { json } = require('express');
const routes = require('./src/routes/Routes');

const PORT = 5001;

app.use(json());

routes(app);

app.listen(PORT, () => {
  console.log(`Nodejs and express app connected on port: ${PORT}`);
});

app.get('/', ({}, res) => {
  res.send(`Hello from Nodejs and express on port: ${PORT}`);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
