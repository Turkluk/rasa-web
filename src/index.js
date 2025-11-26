import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomeScreen from './pages/HomeScreen';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<h1>Ürün Detay Sayfası</h1>} /> 
        </Routes>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);