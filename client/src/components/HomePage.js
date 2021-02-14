import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Make Axios call to server to display tweetData hardcoded into server.js

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userTweet: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async handleClick() {
        const tweetUrl = await axios.get(`/api/tweets`);
        const tweetResponse = tweetUrl.data.name;
        console.log(tweetResponse);
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
                    <button onClick={this.handleClick} className='btn btn-primary'>Click me!</button>
                    <ul>
                        <li> {this.tweetResponse} </li>
                    </ul>
                </div>
                
            </div>
        )
    }
    }



export default HomePage;