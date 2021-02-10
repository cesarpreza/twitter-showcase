import React from 'react';
import { Link } from 'react-router-dom';

function TweetSearch() {
    return (
        <div>
            <div> 
                <nav className='navbar-expand-md navbar-light' style={{ backgroundColor: 'lightblue' }}>
                    <h1>Twitter Showcase App</h1>
                    <Link to='/' >
                        <button>Home</button>
                    </Link>
                    <Link to='/random'>
                        <button>Random Tweet</button>
                    </Link>
                </nav>
            </div>
            
            <div>
                <h1>Search Page</h1>
                <input type='text' placeholder='search for a tweet..'></input>
            </div>
        </div>
    )
}

export default TweetSearch;