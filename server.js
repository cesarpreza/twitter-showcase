const axios = require('axios');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
require('dotenv').config();
const token = process.env.TOKEN;


const app = express();

app.use('/', express.static(path.join(__dirname, 'client/build')));




app.get(`/api`, (req, res) => {
    const username = req.query.username ;
    
    axios({
        method: 'get',
        url: `https://api.twitter.com/1.1/search/tweets.json?q=from:${username}&lang=en&count=5`,
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

<<<<<<< HEAD
=======

app.listen(port, () => console.log('listening on port 3000'));
>>>>>>> styling
