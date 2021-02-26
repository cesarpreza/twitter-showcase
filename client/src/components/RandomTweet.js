import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class RandomTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userTweets: []
        }
        this.getTweets = this.getTweets.bind(this);
    }

    
    componentDidMount() {
        this.getTweets()
    }

    async getTweets() {
        const tweetUrl = await axios.get(`/api`);
        const tweetResponse = tweetUrl.data.statuses;
        this.setState({ userTweets: tweetResponse });
        console.log(tweetResponse)
    }

    render() {
        console.log(this.state)
        return (
            <div className='page-container'>
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