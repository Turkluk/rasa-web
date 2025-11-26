const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors'); // Frontend ile iletişim için

dotenv.config();
connectDB(); // Veritabanına bağlan

const app = express();

app.use(express.json()); // JSON okuma
app.use(cors()); // CORS ayarları

// Rota Yönlendirmeleri
app.use('/api/products', productRoutes);

// Hata yakalama mantığı
app.use((req, res, next) => {
    res.status(404).json({ message: `Bulunamadı - ${req.originalUrl}` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Sunucu ${PORT} portunda başarıyla başlatıldı.`));