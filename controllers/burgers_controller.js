const express = require("express");
const { Burger, BurgerType } = require("../models/burger");

const router = express.Router();

// Set router
router
  .route("/")
  .get(async (req, res) => {
    const burgers = await Burger.selectAll();

    res.status(200).json({
      status: "success",
      results: burgers.length,
      data: {
        data: burgers
      }
    });
  })
  .post(async (req, res) => {
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
  })
  .patch(async (req, res) => {
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

module.exports = router;
