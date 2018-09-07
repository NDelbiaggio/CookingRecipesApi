const { Unit } = require("../models/unit");

const express = require("express");
const router = express.Router();

/**
 * @api {GET} /api/units Get the units
 * @apiGroup Unit
 * @apiName GetUnits
 * @apiSuccessExample {json} Success-Response:
 * [{"_id": "5b91b15faf7702e447afaa4f","name": "grammes"},{"_id": "5b91b15faf7702e447afaa54","name": "kilo grammes"},{"_id": "5b91b160af7702e447afaa57","name": "piece"},{"_id": "5b91b160af7702e447afaa58","name": "mili liters"},{"_id": "5b91b160af7702e447afaa59","name": "liters"}]
 */
router.get("/", async (req, res) => {
  const units = await Unit.find().select("-__v");
  res.send(units);
});

module.exports = router;
