const express = require("express");
const { Burger } = require("../models/burger");

// const app = express();

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    res.status(200).send(await Burger.selectAll());
  })
  .post((req, res) => {});

module.exports = router;
