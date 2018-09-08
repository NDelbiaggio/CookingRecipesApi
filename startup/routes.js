const express = require("express");

const categories = require("../routes/categories");
const units = require("../routes/units");
const ingredients = require("../routes/ingredients");
const recipes = require("../routes/recipes");

const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use("/api/categories", categories);
  app.use("/api/units", units);
  app.use("/api/ingredients", ingredients);
  app.use("/api/recipes", recipes);
  app.use(error);
};
