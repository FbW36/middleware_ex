const express = require("express");
const app = express();
const port = 5000;

const validateUserRouter = require("./routes/validateUserRouter");
const sanitizeUserRouter = require("./routes/sanitizeUserRouter");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Documentation");
});

/** AVAILABLE ROUTES */
app.use("/validateUser", validateUserRouter);
app.use("/sanitizeUser", sanitizeUserRouter);

/** ERROR HANDLING */
app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});
