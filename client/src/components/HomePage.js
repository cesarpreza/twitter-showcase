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
                <nav className='navbar navbar-light navbar-expand-sm'
                    style={{ backgroundColor: 'lightblue' }} >
                        <h3 className='navbar-brand'>Tweet Hunt</h3>
                            <div className='collapse navbar-collapse' id='menuContainer'>
                                <ul className='navbar-nav ml-auto'>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to='/search'>
                                                    <button className='btn btn-primary'>Search</button>
                                                </Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to='/random'>
                                                    <button className='btn btn-primary' >Random Tweet</button>
                                                </Link>
                                            </li>
                                        </ul>
                        </div>
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