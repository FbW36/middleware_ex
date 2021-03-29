const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const validateRouter = require("./routes/validateRouter");
const sanitizeRouter = require("./routes/sanitizeRouter");

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/**EXPRESS MIDDLEWARE */
app.use(express.json());
app.use(cors());

/**AVAILABLE ROUTES */
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/validateUser", validateRouter);
app.use("/sanitizeUser", sanitizeRouter);

/**ERROR HANDLING */

app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: { message: err.message },
  });
});
