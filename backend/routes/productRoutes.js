const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 

// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
    try {
        // Not: productRoutes.js'in çalışması için Product.js de yerinde olmalıdır!
        const products = await Product.find({});
        res.json(products); 
    } catch (error) {
        res.status(500).json({ message: 'Sunucu hatası: Ürün verileri çekilemedi.' });
    }
});

module.exports = router;