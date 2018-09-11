const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

/**
 * @class Ingredient
 * @property {String} name          - the name of the ingredient
 * @property {String} image         - the path to the image of the ingredient
 * @property {String} category      - the category of the ingredient (fruit, vegetable ...)
 * @property {String} description   - a description about the ingredient, or some specifications
 */
const ingredientSchema = new mongoose.Schema({
  name: String,
  image: String,
  category: String,
  description: String
});

ingredientSchema.plugin(mongoosePaginate);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

exports.Ingredient = Ingredient;
exports.ingredientSchema = ingredientSchema;
