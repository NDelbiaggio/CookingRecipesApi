const mongoose = require("mongoose");

const { ingredientSchema } = require("./ingredient");

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [ingredientSchema],
  steps: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

exports.Recipe = Recipe;
