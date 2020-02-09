const express = require("express");
const { Burger, BurgerType } = require("../models/burger");

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    const burgers = Burger.selectAll();

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
    const result = Burger.insertOne(post);

    res.status(200).json({
      status: "success",
      data: {
        data: result
      }
    });
  })
  .patch(async (req, res) => {
    const { id, devoured, burger_type } = req.body;
    const result = await Burger.updateOne({ devoured }, "id", id);

    await BurgerType.updateOne({ burger_type }, "id", 1);

    res.status(200).json({
      status: "success",
      data: {
        data: result
      }
    });
  });

// router.route('/:type').patch(async (req,res)=>{
//   const type = req.body.type;
//   Burger.updateOne
// })
module.exports = router;
