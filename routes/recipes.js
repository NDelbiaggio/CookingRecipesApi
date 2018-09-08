const { Recipe } = require("../models/recipe");

const express = require("express");
const router = express.Router();

/**
 * @apiDefine Recipe
 * @apiParam {Recipe}       recipe                   recipe
 * @apiParam {String}       recipe.name              name of the recipe
 * @apiParam {String}       recipe.description       description of the recipe
 * @apiParam {Number}       recipe.time              approximate time to do the recipe
 * @apiParam {Number}       recipe.cookingTime       the time required to cook the dish
 * @apiParam {String}       recipe.ovenTemperature   temperature of the oven if needed
 * @apiParam {[Ingredient]} recipe.ingredients       The list of the ingredients in the recipe
 * @apiParam {[String]}     recipe.steps             The steps for cooking the dish
 */

/**
 * @api {GET} /api/recipes Get the recipes
 * @apiGroup Recipes
 * @apiName Get Recipes
 * @apiSuccess {String}       name                the name of the recipe
 * @apiSuccess {String}       description         description of the recipe
 * @apiSuccess {Number}       time                the approximate time to make this recipe
 * @apiSuccess {Number}       cookingTime         the time required to cook the dish if needed
 * @apiSuccess {String}       ovenTemperature     the temperature of the oven if needed
 * @apiSuccess {[Ingredient]} ingredients         the list of ingredients
 * @apiSuccess {[String]}     steps               the list of steps to create this recipes
 */
router.get("/", async (req, res) => {
  const recipes = await Recipe.find().select("-__v");
  res.send(recipes);
});

/**
 * @api {POST} /api/recipes Post a recipe
 * @apiGroup Recipes
 * @apiName Create a recipe
 * @apiUse Recipe
 */
router.post("/", async (req, res) => {
  const {
    name,
    time,
    cookingTime,
    ovenTemperature,
    ingredients,
    steps
  } = req.body;

  let recipe = new Ingredient({
    name,
    time,
    cookingTime,
    ovenTemperature,
    ingredients,
    steps
  });

  recipe = await recipe.save();
  res.send(JSON.stringify(recipe));
});

module.exports = router;
