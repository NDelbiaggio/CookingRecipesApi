const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  description: String
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

exports.Ingredient = Ingredient;
exports.ingredientSchema = ingredientSchema;
