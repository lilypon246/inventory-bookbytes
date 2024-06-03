const Inventory = require('../models/inventory');

// Controller untuk membuat stok produk
async function createStock(req, res, next) {
  const { id_product, stock } = req.body;
  try {
    const inventory = new Inventory({ id_product, stock });
    await inventory.save();
    res.json(inventory);
  } catch (error) {
    next(error);
  }
}

// Controller untuk mengurangi atau menambahkan stok produk
async function updateStock(req, res, next) {
  const productId = req.params.productId;
  const { quantity } = req.body;

  try {
    const inventory = await Inventory.findOne({ id_product: productId });

    if (!inventory) {
      return res.status(404).json({ message: 'Product not found' });
    }

    inventory.stock = quantity;
    await inventory.save();
    res.json(inventory);
  } catch (error) {
    next(error);
  }
}

// Controller untuk memeriksa stok produk sebelum pembayaran
async function checkStock(req, res, next) {
  const productId = req.params.productId;

  try {
    const inventory = await Inventory.findOne({ id_product: productId });

    if (!inventory) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ remainingStock: product.stock });
  } catch (error) {
    next(error);
  }
}

async function decreaseStock(req, res, next) {
  const productId = req.params.productId;

  try {
    const inventory = await Inventory.findOne({ id_product: productId });
    const remainigStock = inventory.stock;

    if (remainigStock <= 0) {
      return res.status(400).json({ message: 'Stock is empty' });
    }

    inventory.stock -= 1;
    await inventory.save();
    res.json(inventory);
  } catch (error) {
    next(error);
  }
}

async function increaseStock(req, res, next) {
  const productId = req.params.productId;

  try {
    const inventory = await Inventory.findOne({ id_product: productId });
    inventory.stock += 1;
    await inventory.save();
    res.json(inventory);
  } catch (error) {
    next(error);
  }
}

const inventoryController = { createStock, updateStock, checkStock, decreaseStock, increaseStock };

module.exports = inventoryController;
