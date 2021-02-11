import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

//Make Axios call to server to display tweetData hardcoded into server.js
// const tweetData = {
//     "userId": 1,
//     "id": 1,
//     "user": " Cesar Preza",
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// },
const tweetData = {
        "userId": 1,
        "id": 1,
        "user": " Cesar Preza",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };


function HomePage() {
        
    return (
        <div>
            <div>
                <nav className='navbar-expand-md navbar-light' style={{backgroundColor: 'lightblue'}} >
                    <h1>Twitter Showcase App</h1>
                    <Link to='/search'>
                        <button>Search</button>
                    </Link>
                    <Link to='/random'>
                        <button>Random Tweet</button>
                    </Link>
                </nav>
            </div>
            <div>
                <h1>Home Page</h1>
                <button onClick={() => {
                            console.log(tweetData);
                        }}>Click me!</button>
            </div>
            
        </div>
    )
}


export default HomePage;