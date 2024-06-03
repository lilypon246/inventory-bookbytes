const express = require('express');
const inventoryController = require('../controllers/inventory.js');
const router = express.Router();

router.get('/products/:productId', inventoryController.checkStock);
router.post('/products', inventoryController.createStock);
router.put('/products/:productId', inventoryController.updateStock);
router.get('/products/:productId/decrease-stock', inventoryController.decreaseStock);
router.get('/products/:productId/increase-stock', inventoryController.increaseStock);

module.exports = router;
