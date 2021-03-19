const axios = require('axios');
const express = require('express');
const path = require('path');
const port = 3000;
const cors = require('cors');
require('dotenv').config();
const token = process.env.TOKEN;


const app = express();

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
        callback(null, true)
    } else {
        console.log("Origin rejected")
        callback(new Error('Not allowed by CORS'))
    }
    }
}
app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.listen(port, () => console.log('listening on port 3000'));

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

