const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname , 'client/build')));

app.listen(port, () => console.log('listening on port 3000'));

//make call to relative path using tweetData
//In HomePage/App.js make axios call to server to get data back in the console. 

// const tweetData = {
//             "userId": 1,
//             "id": 1,
//             "user": " Cesar Preza",
//             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//             "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//         },

