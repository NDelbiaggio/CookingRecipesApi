const { Category } = require("../models/category");

const express = require("express");
const router = express.Router();

/**
 * @api {GET} /api/categories Get the categories
 * @apiGroup Category
 * @apiName Get Categories
 * @apiSuccessExample {json} Success-Response:
 * [{ "_id": "5b91b15faf7702e447afaa4e","name": "fruit"},{"_id": "5b91b15faf7702e447afaa53","name": "vegetables"},{"_id": "5b91b160af7702e447afaa55","name": "meat"},{"_id": "5b91b160af7702e447afaa56","name": "fish"}]
 */
router.get("/", async (req, res) => {
  const category = await Category.find().select("-__v");
  res.send(category);
});

module.exports = router;
