import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        }

    render() {
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
                <main>
                    <div>
                    <h2>Welcome to the Twitter Showcase App</h2>
                    <h3>Use the Random Tweet button to see tweets from 5 of my favorite accounts
                        or try searching for your own using the toolbar</h3>
                    </div>
                </main>
            </div>
        )
    }
    }



export default HomePage;