const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname , 'client/build')));

app.listen(port, () => console.log('listening on port 3000'));

app.get(`/api/tweets`, (req, res) => {
    const tweetData = [
        {
            "id": 1,
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "Tattoine",
        }
    ]
    res.json(tweetData);
})

//make call to relative path using tweetData
//In HomePage/App.js make axios call to server to get data back in the console. 



