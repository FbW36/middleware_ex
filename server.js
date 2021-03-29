const express = require("express");
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`backend server started on port: ${PORT}`);
});

app.use(express.json());

const validateRouter = require("./routes/validateRouter");
const sanitizeRouter = require("./routes/sanitizeRouter");

//ROUTES

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/validateUser", validateRouter);
app.use("/sanitizeUser", sanitizeRouter);

// ERROR HANDLING

app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
