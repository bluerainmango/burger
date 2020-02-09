const express = require("express");
const { Burger, BurgerType } = require("../models/burger");
const { catchAsync } = require("../util/catchAsync");

const router = express.Router();

// Router handlers
const getBurgers = catchAsync(async (req, res, next) => {
  const burgers = await Burger.selectAll();

  res.status(200).json({
    status: "success",
    results: burgers.length,
    data: {
      data: burgers
    }
  });
});

const postBurger = catchAsync(async (req, res, next) => {
  const { burger_name, devoured } = req.body;

  const result = await Burger.insertOne({
    burger_name,
    devoured
  });

  res.status(200).json({
    status: "success",
    data: {
      data: result
    }
  });
});

const updateBurger = catchAsync(async (req, res, next) => {
  // 1. Update burgers table
  const { id, devoured, burger_type } = req.body;
  const result = await Burger.updateOne({ devoured }, "id", id);

  // 2. Update burger_type table for character
  await BurgerType.updateOne({ burger_type }, "id", 1);

  res.status(200).json({
    status: "success",
    data: {
      data: result
    }
  });
});

const viewRouter = catchAsync(async (req, res) => {
  // Get all burgers' info
  const burgers = await Burger.selectAll();

  // Get a burger character type
  const character = await BurgerType.selectAll();
  const burger_type = character[0].burger_type;

  res.render("index", { burgers, burger_type });
});

// Set router
router
  .route("/")
  .get(getBurgers)
  .post(postBurger)
  .patch(updateBurger);

module.exports = {
  viewRouter,
  burgerRouter: router
};
