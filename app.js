const express = require('express');
const path = require('path');
const airdata = require('.utils/airdata');
const { error } = require('console');

const app = express();
const PORT = 3000

app.get('/weather', (req,res) => {
    airdata()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        console.error('error', error);
        res.status(500).json()
    });
});

app.listen(PORT, () => {
    console.log('Server on')
}); 