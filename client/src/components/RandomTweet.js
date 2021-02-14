import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RandomTweet extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav className='navbar navbar-expand-md navbar-light'
                    style={{ backgroundColor: 'lightblue' }}>
                        <h3 className='navbar-brand'>Tweet Hunt</h3>
                        <div className='collapse navbar-collapse'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/' >
                                        <button className='btn btn-primary'>Home</button>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/search'>
                                        <button className=' btn btn-primary'>Search</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        
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