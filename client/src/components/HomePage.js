import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import Axios from 'axios';

//Make Axios call to server to display tweetData hardcoded into server.js

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userTweet: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ userTweet: 'a tweet' });
        console.log('tweet changed');
    }

    render(){
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
                    <button onClick={this.handleClick}>Click me!</button>
                </div>
                
            </div>
        )
    }
    }



export default HomePage;