import React, { Component } from 'react';
import axios from 'axios'

class RandomTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tweet: null
        }
        this.getTweets = this.getTweets.bind(this);
    }

    
    componentDidMount() {
        this.getTweets('/api')
    }

    async getTweets(url) {
        const tweetUrl = await axios.get(url);
        const tweetResponse = tweetUrl.data.statuses[0];
        this.setState({ tweet: tweetResponse });
        console.log(tweetResponse)
    }

    render() {
        console.log(this.state)
        return (
            <div className='page-container'>
                <main>
                    <div>
                        <div>
                            <h2>Select a user to display a random tweets from that acount</h2>
                        </div>
                        <div className='tweetCard' > 
                            {this.state.tweet !== null ?
                                <div>
                                    <p>username: {this.state.tweet.user.screen_name} </p>
                                    <p>tweet: { this.state.tweet.text }</p>
                                </div> :
                                null }
                            
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default RandomTweet;