const mongoose = require("mongoose");

/**
 * @class Unit
 * @property {String} name    - the name of the unit
 */
const unitSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Unit = mongoose.model("Unit", unitSchema);

exports.Unit = Unit;
exports.unitSchema = unitSchema;
