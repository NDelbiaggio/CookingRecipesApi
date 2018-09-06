const { Ingredient } = require("../models/ingredient");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const ingredients = await Ingredient.find().select("-__v");
  res.send(ingredients);
});

router.post("/", async (req, res) => {
  let ingredient = new Ingredient({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    description: req.body.description
  });

  ingredient = await ingredient.save();
  res.send(JSON.stringify(ingredient));
});

module.exports = router;
