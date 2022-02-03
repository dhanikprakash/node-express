const express = require('express');
const { rest } = require('lodash');
const app = express();
const morgan = require('morgan');
const {products, people } = require('./data');



// app.use([morgan('tiny')]);
app.use(express.urlencoded({extended:false}));
app.use( express.static('./content'));


app.post('/login', (req, res) => {
    console.log(req.body);
   res.send(`Welcome ${req.body.name}`);
});

app.get('/api/people', (req,res) => {
    res.json(people);
})

app.listen(5000, () => {
  console.log('server is listening on 5000...');
});