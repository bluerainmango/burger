require("dotenv").config();
const express = require("express");
const path = require("path");

const burgerRouter = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/burgers", burgerRouter);

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening from ${PORT}...`);
});
