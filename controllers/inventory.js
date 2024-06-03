const Inventory = require('../models/inventory');

// Controller untuk mengurangi atau menambahkan stok produk
async function updateStock(req, res, next) {
    const params = req.params
    console.log(params)

    try {
        const { quantity } = req.body;
        const inventory = await Inventory.findById(params.productId);
        
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
// async function checkStock(req, res, next) {
//     try {
//         const { productId, quantity } = req.body;
//         const product = await Product.findById(productId);
        
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         if (product.stock < quantity) {
//             return res.status(400).json({ message: 'Insufficient stock' });
//         }

//         res.json({ remainingStock: product.stock });
//     } catch (error) {
//         next(error);
//     }
// }

const inventoryController = { updateStock };

module.exports = inventoryController
