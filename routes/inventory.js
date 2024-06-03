const express = require('express');
const productController = require('../controllers/inventory.js');
const router = express.Router();

// Middleware untuk verifikasi token dapat ditambahkan di sini jika diperlukan

// Routes
router.post('/products/:productId', productController.updateStock);
// router.get('/products/:productId', productController.checkStock);

module.exports = router;
