require('dotenv').config();

const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  id_product: String,
  stock: Number,
});

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
