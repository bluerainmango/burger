require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const burgerRouter = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/api/burgers", burgerRouter);
app.use("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening from ${PORT}...`);
});
