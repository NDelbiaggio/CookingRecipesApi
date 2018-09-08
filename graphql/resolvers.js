const { Ingredient } = require("../models/ingredient");

var getIngredient = async function(args) {
  let ingredient = await Ingredient.findOne({ _id: args._id });
  return ingredient;
};

var getIngredients = async function(args) {
  if (!args.filter) return await Ingredient.find();
  console.log(args);
  const { filterProps, sort, limit, or } = args.filter;

  return await Ingredient.find(filterProps)
    .or(or)
    .sort(sort)
    .limit(limit);
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

const resolvers = {
  ingredient: getIngredient,
  ingredients: getIngredients,
  addIngredient: createIngredient
};

module.exports = resolvers;
