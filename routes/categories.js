const { Category } = require("../models/category");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const category = await Category.find().select("-__v");
  res.send(category);
});

module.exports = router;
