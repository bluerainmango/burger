require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;

const burgerRouter = require("./controllers/burgers_controller");

const app = express();

app.use("/api/burgers", burgerRouter);

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening from ${PORT}...`);
});
