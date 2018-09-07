const mongoose = require("mongoose");

/**
 * @class Category
 * @property {String} name    - the name of the category
 */
const categorySchema = new mongoose.Schema({
  name: String
});

const Category = mongoose.model("Category", categorySchema);

exports.Category = Category;
