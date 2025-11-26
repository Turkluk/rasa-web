const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }, 
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { 
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: { 
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true, // Oluşturulma/Güncellenme zamanını otomatik ekler
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;