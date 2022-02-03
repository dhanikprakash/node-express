
   
const express = require('express')
const router = express.Router()
const {people} = require('../data');

router.get('/', (req,res) => {
    res.json(people);
})



module.exports = router