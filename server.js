require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const {
  burgerRouter,
  viewRouter
} = require("./controllers/burgers_controller");

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
app.use("/", viewRouter);

// Global error handler: catching errors from catchAsync
app.use((err, req, res, next) => {
  console.log(`🚨`, err);
  res.status(400).render("error");
});

// Server listening
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening from ${PORT}...`);
});
