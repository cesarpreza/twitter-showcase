import React, { Component } from 'react';
import axios from 'axios'
import nasaImage from '../images/nasa.png';
import espnImage from '../images/espn.png';
import laKingsImage from '../images/la_kings.png';
import disneyImage from '../images/disney.png';
import starWarsImage from '../images/star-wars.jpg';

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
                        <div className='tweet-container' >
                            <div className='tweet-card'> 
                                <figure>
                                    <img classaName='nasa-image' src={laKingsImage}></img>
                                    <img classaName='nasa-image' src={espnImage}></img>
                                    <img classaName='nasa-image' src={nasaImage}></img>
                                    <img classaName='nasa-image' src={starWarsImage}></img>
                                    <img classaName='nasa-image' src={disneyImage}></img>
                                </figure>
                                    {this.state.tweet !== null ?
                                        <div>
                                            <p>username: {this.state.tweet.user.screen_name} </p>
                                            <p>tweet: { this.state.tweet.text }</p>
                                        </div> :
                                        null }
                                    
                                </div>
                        </div>
                            
                    </div>
                </main>
            </div>
        )
    }
}


export default RandomTweet;