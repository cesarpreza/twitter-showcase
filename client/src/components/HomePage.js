import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
            <div className='page-container'>
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