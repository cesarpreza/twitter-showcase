import React, { Component } from 'react';
import axios from 'axios'

class RandomTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nasaTweets: []
        }
        this.getTweets = this.getTweets.bind(this);
    }

    
    componentDidMount() {
        this.getTweets('/api')
    }

    async getTweets(url) {
        const nasaTweetUrl = await axios.get(url);
        const nasaTweetResponse = nasaTweetUrl.data.statuses[0].text;
        this.setState({ nasaTweets: nasaTweetResponse });
        console.log(nasaTweetResponse)
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
                        <div> {/* twitter icons will display here */} 
                            {/* Make an API call to an account 
                                Grab logo from twitter account and display a button under the icon
                                on clicking the button, a random tweet from that user will display
                                 */}
                            {/* <h3>
                                {this.state.nasaTweets.map(tweet => {
                                    <p> {tweet.data} </p>
                                })}
                            </h3> */}
                            {this.state.nasaTweets}
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}


export default RandomTweet;