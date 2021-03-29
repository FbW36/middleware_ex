const express = require("express");
const cors = require("cors");
const validateUserRoute = require("./routes/validateUserRoute");
const sanitizeUserRoute = require("./routes/sanitizeUserRoute");

const PORT = 5005;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Backend started on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("An exercise by Vasillis, aka Wasabis");
});

app.use("/validateUser", validateUserRoute);
app.use("/sanitizeUser", sanitizeUserRoute);
