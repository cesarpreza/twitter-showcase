const axios = require('axios');
const express = require('express');
const path = require('path');
const port = 3000;
require('dotenv').config();
const token = process.env.TOKEN;


const app = express();

app.use('/', express.static(path.join(__dirname , 'client/build')));

app.listen(port, () => console.log('listening on port 3000'));

app.get(`/api`, (req, res) => {
    axios({
        method: 'get',
        url: 'https://api.twitter.com/1.1/search/tweets.json?q=elonmusk&result_type=popular',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            res.json(response.data);
            console.log(response.data);
        }).catch((err) => {
        console.log(err.message)
    })
})

//make call to relative path using tweetData
//In HomePage/App.js make axios call to server to pull data to front end. 
