const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Unit = mongoose.model("Unit", unitSchema);

exports.Unit = Unit;
exports.unitSchema = unitSchema;
