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
        url: 'https://api.twitter.com/1.1/search/tweets.json?q=nasa',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then((response) => {
            res.json(response.data);
        }).catch((err) => {
        console.log(err.message)
    })
})

app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

//make call to relative path using tweetData
//In HomePage/App.js make axios call to server to pull data to front end. 
