const { Ingredient } = require("../models/ingredient");
const { Recipe } = require("../models/recipe");

var getIngredient = async function(args) {
  let ingredient = await Ingredient.findOne({ _id: args._id });
  return ingredient;
};

var getIngredients = async function(args) {
  if (!args.filter) return await Ingredient.find();

  return await Ingredient.find(args.filter.filterProps)
    .or(args.filter.or)
    .sort(args.filter.sort)
    .limit(args.filter.limit);
};

var createIngredient = async function(args) {
  let ingredient = new Ingredient({
    name: args.name,
    image: args.image,
    category: args.category,
    description: args.description
  });

  return await ingredient.save();
};

var getRecipes = async function() {
  return await Recipe.find();
};

const resolvers = {
  ingredient: getIngredient,
  ingredients: getIngredients,
  recipes: getRecipes,
  addIngredient: createIngredient
};

module.exports = resolvers;
