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
        console.log(tweetUrl.data.statuses[0].text);
    }
    render() {
        return (
            <div>
                <div>
                    <nav className='navbar navbar-light navbar-expand-sm'
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
                <main>
                    <div>
                        <div>
                            <h2>Select an icon to display 5 random tweets from that acount</h2>
                        </div>
                        <div> {/* twitter icons will display here */} 
                            <h3>Images</h3> {/**image times 5 */}
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default RandomTweet;