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
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick() {
        this.getTweets('/api')
    }

    async getTweets(url) {
        const tweetUrl = await axios.get(url);
        const tweetResponse = tweetUrl.data.statuses;
        const randomTweet = tweetResponse[Math.floor(Math.random() * tweetResponse.length)];
        this.setState({ tweet: randomTweet });
        console.log(randomTweet);
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
                                    <img className='image' src={laKingsImage}></img>
                                    <img className='image' src={espnImage}></img>
                                    <img className='image' src={nasaImage}></img>
                                    <img className='image' src={starWarsImage}></img>
                                    <img className='image' src={disneyImage}></img>
                                </figure>
                                <div>
                                    <button id='kingsButton' name='lakings'>Kings</button>
                                    <button id='espnButton' name='espn'>ESPN</button>
                                    <button id='nasaButton' name='nasa' onClick={() => this.handleClick()}>Nasa</button>
                                    <button id='starWarsButton' name='starwars'>Star Wars</button>
                                    <button id='disneyButton' name='disney'>Disney</button>
                            </div>
                                    {this.state.tweet !== null ?
                                        <div className='tweetCard'>
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