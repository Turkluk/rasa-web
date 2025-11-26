import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            {/* Ürün Görseli Linki */}
            <Link to={`/product/${product._id}`}>
                <img src={product.image} alt={product.name} className="product-image" />
            </Link>

            <div className="product-info" style={{ padding: '15px' }}>
                <Link to={`/product/${product._id}`}>
                    <h3 className="product-name">{product.name}</h3>
                </Link>
                
                <h4 className="product-price" style={{ marginTop: '10px' }}>
                    {product.price} TL
                </h4>
                
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => console.log(`Ürün ${product.name} sepete eklendi!`)}
                >
                  Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default ProductCard;