import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class RandomTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTweet: []
        }
    }

    async componentDidMount() {
        const tweetUrl = await axios.get(`/api`);
        const tweetResponse = tweetUrl.data.statuses[0].text;
        this.setState({ userTweet: tweetResponse });
    }
    render() {
        console.log(this.state)
        return (
            <div className='page-container'>
                <div>
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
                                    <Link className='nav-link' to='/search'>
                                        <button className=' btn btn-secondary'>Search</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        
                    </nav>
                </div>
                <main>
                    <div>
                        <div>
                            <h2>Select an icon to display 5 random tweets from that acount</h2>
                        </div>
                        <div> {/* twitter icons will display here */} 
                            {/* Make an API call to an account 
                                Grab logo from twitter account and display a button under the icon
                                on clicking the button, a random tweet from that user will display
                                 */}
                            <h3> {this.state.userTweet} </h3>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default RandomTweet;