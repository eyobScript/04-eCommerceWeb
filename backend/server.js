import express from 'express';
import colors from 'colors';
import products from './data/products.js';
import connectDB from './config/db.js'
import dotenv from "dotenv";
dotenv.config();


connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running....');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running ${process.env.NODE_ENV} mode on port ${port}`);
});
