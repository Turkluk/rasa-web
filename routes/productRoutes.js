const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); 

// Rota: Tüm Ürünleri Getir (GET /api/products)
router.get('/', async (req, res) => {
    try {
        // Veritabanından tüm ürünleri çek
        const products = await Product.find({});
        res.json(products); // Veriyi JSON formatında Frontend'e gönder
    } catch (error) {
        res.status(500).json({ message: 'Sunucu hatası: Ürün verileri çekilemedi.' });
    }
});

// Rota: Tek bir ürünü ID ile Getir (GET /api/products/:id)
router.get('/:id', async (req, res) => {
    // Bu kısma tek ürün çekme mantığı gelecek
    res.send('Tek ürün detayını getirecek API rotası.');
});

module.exports = router;