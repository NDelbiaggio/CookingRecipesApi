const { Ingredient } = require("../models/ingredient");
const express = require("express");
const router = express.Router();

/**
 * @apiDefine Ingredient
 * @apiParam {Ingredient}   ingredient               Ingredient data
 * @apiParam {String}       ingredient.name          name of the ingredient
 * @apiParam {String}       ingredient.image         Path to the image of the ingredient
 * @apiParam {String}       ingredient.category      Category of the ingredient
 * @apiParam {String}       ingredient.description   Description or additional information of the ingredient
 */

/**
 * @api {GET} /api/ingredients Get the ingredients
 * @apiGroup Ingredients
 * @apiName GetIngredients
 * @apiSuccess {Ingredient[]} Ingredients              List of Ingredients
 * @apiSuccess {Ingredient}   ingredient               Ingredient data
 * @apiSuccess {String}       ingredient.name          name of the ingredient
 * @apiSuccess {String}       ingredient.image         Path to the image of the ingredient
 * @apiSuccess {String}       ingredient.category      Category of the ingredient
 * @apiSuccess {String}       ingredient.description   Description or additional information of the ingredient
 *
 * @apiSuccessExample {json} Success-Response:
 * [
 *  {
 *       "_id": "5b91b15faf7702e447afaa4d",
 *       "name": "Banana",
 *      "image": "my/bananaImage.png",
 *       "category": "Fruit",
 *       "description": "Banana from Thailand"
 *   }
 * ]
 *
 */
router.get("/", async (req, res) => {
  const ingredients = await Ingredient.find().select("-__v");
  res.send(ingredients);
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  const ingredients = await Ingredient.find({ _id: id }).select("-__v");
  res.send(ingredients);
});

/**
 * @api {POST} /api/ingredients Create an ingredient
 * @apiGroup Ingredients
 * @apiName Create ingredient
 * @apiUse Ingredient
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Banana",
 *       "image": "link/to/my/banana.png",
 *       "category": "fruit",
 *       "description": "Small banana from Thailand"
 *     }
 */
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
