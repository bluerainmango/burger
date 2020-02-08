const express = require("express");
const { Burger } = require("../models/burger");

// const app = express();

const router = express.Router();

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
    const post = req.body;
    const result = await Burger.insertOne(post);

    res.status(200).json({
      status: "success",
      data: {
        data: result
      }
    });
  })
  .patch(async (req, res) => {
    const { id, devoured } = req.body;
    const result = await Burger.updateOne({ devoured }, "id", id);

    res.status(200).json({
      status: "success",
      data: {
        data: result
      }
    });
  });

module.exports = router;
