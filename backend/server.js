const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('<h1>Harmic eCommerce Backend</h1><p>Server is running smoothly...</p>');
});

// API Route for Products (Example)
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Fresh Apples', price: 200 },
        { id: 2, name: 'Organic Bananas', price: 150 },
        { id: 3, name: 'Carrots', price: 80 }
    ];
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is active on http://localhost:${PORT}`);
});
