const {products, people } = require('./data');
const express = require('express');
const app = express();
const logger  = require('./logger');
const authorise = require('./authorise');

app.use([logger, authorise]);
app.get('/api/products/:ProductID', (req,res) => {
    const response = products.find(product=> product.id == req.params.ProductID)
    res.json(response);
})

app.get('/api/products/', (req,res) => {
    const response = products.map((product) => {
        const {id, name, price } = product
        return {id, name, price}
    })
    res.status(200).json({ success: true, data:response });
})

app.get('/api/people', (req,res) => {
    res.json(people);
})

app.get('*', (req,res) => {
    res.sendStatus(404);
})
app.listen(5001, () => {
    console.log('Api server listening on port 5000');
});