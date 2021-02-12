import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomTweet extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className='navbar-expand-md navbar-light' style={{ backgroundColor: 'lightblue' }}>
                        <h1>Twitter Showcase App</h1>
                        <Link to='/' >
                            <button>Home</button>
                        </Link>
                        <Link to='/search'>
                            <button>Search</button>
                        </Link>
                    </nav>
                </div>
                <div>
                    <h1>Random Tweet Page</h1>
                </div>
            </div>
        )
    }
   
}


export default RandomTweet;