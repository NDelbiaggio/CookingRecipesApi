const express = require("express");

const categories = require("../routes/categories");
const units = require("../routes/units");
const ingredients = require("../routes/ingredients");
const recipes = require("../routes/recipes");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/categories", categories);
  app.use("/api/units", units);
  app.use("/api/ingredients", ingredients);
  app.use("/api/recipes", recipes);
  //app.use(error);
};
