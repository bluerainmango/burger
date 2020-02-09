require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const burgerRouter = require("./controllers/burgers_controller");
const { Burger, BurgerType } = require("./models/burger");

const PORT = process.env.PORT || 3000;

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Frontend folder location
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// API router
app.use("/api/burgers", burgerRouter);

// View router
app.use("/", async (req, res) => {
  // Get all burgers' info
  const burgers = await Burger.selectAll();

  // Get a burger character type
  const character = await BurgerType.selectAll();
  const burger_type = character[0].burger_type;

  res.render("index", { burgers, burger_type });
});

// Server
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening from ${PORT}...`);
});
