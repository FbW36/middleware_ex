const express = require("express");
const app = express();
const PORT = 5001;
const validateRouter = require("./routes/validateRouter");
const sanitizerRouter = require("./routes/sanitizerRouter");

app.use(express.json());

app.listen(PORT, () => {
  console.log("listens at localhost:5001");
});

app.use("/validate-user", validateRouter);

app.use("/sanitize-user", sanitizerRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});



