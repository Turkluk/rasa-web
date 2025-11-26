const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MONGO_URI, .env dosyasından okunur
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Başarıyla Bağlandı: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Bağlantı Hatası: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;