const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  medicine_name: {
    type: String,
  },
  available_quantity: {
    type: Number,
  },
});

const inventory = new mongoose.model("inventory", inventorySchema);
module.exports = inventory;
