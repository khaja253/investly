const express = require('express');
const router = express.Router();
const request = require('request');
const jwtAuth = require('../middleware/check-auth');

//url with access key
const url = 'https://financialmodelingprep.com/api/v3/quote/BABA?apikey=b377b8eb93e6b356409e3bd65ba0c135';

//request to get the stocks data
router.get('/api/stocks', jwtAuth, () => {
    request({ url: url }, (err, res) => {
        const response = JSON.parse(res.body);
        console.log(response[0].price);
    })
});

module.exports = router;