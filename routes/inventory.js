const express = require('express');
const inventoryController = require('../controllers/inventory.js');
const router = express.Router();

router.get('/', inventoryController.getAllInventory);
router.get('/stocks', inventoryController.getAllStocks);
router.get('/stocks/:productId', inventoryController.checkStock);
router.post('/stocks', inventoryController.createStock);
router.put('/stocks/:productId', inventoryController.updateStock);
router.get('/stocks/:productId/decrease-stock', inventoryController.decreaseStock);
router.get('/stocks/:productId/increase-stock', inventoryController.increaseStock);

module.exports = router;
