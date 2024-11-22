const express = require('express');
import products from './data/products'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    req.send('API is running...')
});

app.get('/api/products', (req, res) => {
    res.json(products)
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product._id === req.parms)
    req.json(products)
});

app.listen(port , ()=>{
    console.log(`listening on prt ${port}`);
})