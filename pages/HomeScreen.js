import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // package.json'daki proxy sayesinde direkt /api/products kullanılır
                const { data } = await axios.get('/api/products'); 
                setProducts(data);
            } catch (err) {
                console.error("Veri çekme hatası:", err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Tüm Ürünlerimiz</h1>
            <div className="product-list-grid">
                {products.map((product) => (
                    // Çekilen her bir ürün için ProductCard bileşenini render et
                    <ProductCard key={product._id} product={product} /> 
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;