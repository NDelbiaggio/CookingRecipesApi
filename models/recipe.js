const mongoose = require("mongoose");

const { ingredientSchema } = require("./ingredient");

/**
 * @class Recipe
 * @property {String} name                - the name of the recipe
 * @property {Number} time                - the approximate time to make this recipe
 * @property {Number} cookingTime         - the time required to cook the dish if needed
 * @property {Ingredient[]} ingredients   - the list of ingredients
 * @property {String[]} steps             - the list of steps to create this recipes
 */
const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  time: Number,
  cookingTime: Number,
  ovenTemperature: String,
  ingredients: [ingredientSchema],
  steps: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

exports.Recipe = Recipe;
