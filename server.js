const axios = require('axios');
const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname , 'client/build')));

app.listen(port, () => console.log('listening on port 3000'));

app.get(`/api`, (req, res) => {
    axios({
        method: 'get',
        url: 'http://swapi.dev/api/people/1/',
    })
        .then((response) => {
            res.json(response.data);
            console.log(response.data);
        }).catch((err) => {
        console.log(err.message)
    })
})

//make an axios get request to swapi for now.
//check postman to make sure the data is being returned. ERROR: connect ECONNREFUSED 127.0.0.1:80
//change swapi data to twitter data using bearer token. ~
//once data is getting pulled to back end server, make axios call to back end from the front end to display the data.


//make call to relative path using tweetData
//In HomePage/App.js make axios call to server to pull data to front end. 

//API Key: eD8dNSshMep0cFHD1oayU9fCk
//API Secret Key: fqUY3Fk6aCyUharES8EApjoI1uqploU0Yh1ejBvTpJ75az2P4l
//API Bearer Token: AAAAAAAAAAAAAAAAAAAAALSGMwEAAAAAWnZ%2FET8Kbvv61sjWuWQpRqP2tZo%3DzpvoqU6BOqu9ePL96aOb56vjcK0XTvY3xuPCv8PKbdqF8jL6JE 

