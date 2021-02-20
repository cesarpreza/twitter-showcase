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
        url: 'http https://swapi.dev/api/people/1/',
    })
        .then((response) => {
            res.json(response.data);
            console.log(response.data);
        }).catch((err) => {
        console.log(err.message)
    })
})


//make call to relative path using tweetData
//In HomePage/App.js make axios call to server to get data back in the console. 

//API Key: eD8dNSshMep0cFHD1oayU9fCk
//API Secret Key: fqUY3Fk6aCyUharES8EApjoI1uqploU0Yh1ejBvTpJ75az2P4l
//API Bearer Token: AAAAAAAAAAAAAAAAAAAAALSGMwEAAAAAWnZ%2FET8Kbvv61sjWuWQpRqP2tZo%3DzpvoqU6BOqu9ePL96aOb56vjcK0XTvY3xuPCv8PKbdqF8jL6JE 

