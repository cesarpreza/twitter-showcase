import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
            </div>
            
        </div>
    )
}


export default HomePage;