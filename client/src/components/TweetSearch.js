import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class TweetSearch extends Component {
    render() {
        return (
            <div className='page-container'>
                {/* <div> 
                    <nav className='navbar navbar-light navbar-expand-sm'>
                        <h3 className='navbar-brand'>Tweet Hunt</h3>
                        <div className='collapse navbar-collapse'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/' >
                                        <button className='btn btn-secondary'>Home</button>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/random'>
                                        <button className='btn btn-secondary'>Random Tweet</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        
                    </nav>
                </div> */}
                
                <div>
                    <h1>Search Page</h1>
                    <input type='text' placeholder='search for a tweet..'></input>
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;