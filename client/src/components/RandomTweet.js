import React, { Component } from 'react';
import axios from 'axios'
import nasaImage from '../images/nasa.png';
import espnImage from '../images/espn.png';
import laKingsImage from '../images/la_kings.png';
import disneyImage from '../images/disney.png';
import starWarsImage from '../images/star-wars.jpg';
import TweetCard from './TweetCard';

class RandomTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tweet: null
        }
        this.getTweets = this.getTweets.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleClick(username) {
        this.getTweets(`/api?username=${username}`);
    }

    async getTweets(url) {
        const tweetUrl = await axios.get(url);
        const tweetResponse = tweetUrl.data.statuses;
        const randomTweet = tweetResponse[Math.floor(Math.random() * tweetResponse.length)];
        this.setState({ tweet: randomTweet });
        console.log(randomTweet.user.screen_name);
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
                                    <button className='btn btn-dark btn-space' id='kingsButton' onClick={() => this.handleClick('lakings')}>LA Kings</button>
                                    <button className='btn btn-dark btn-space' id='espnButton' onClick={() => this.handleClick('espn')}>ESPN</button>
                                    <button className='btn btn-dark btn-space' id='nasaButton' onClick={() => this.handleClick('nasa')}>Nasa</button>
                                    <button className='btn btn-dark btn-space' id='starWarsButton' onClick={() => this.handleClick('starwars')}>Star Wars</button>
                                    <button className='btn btn-dark btn-space' id='disneyButton' onClick={() => this.handleClick('disney')}>Disney</button>
                            </div>
                                    {this.state.tweet !== null ?
                                    <TweetCard tweets={this.state.tweet} /> :
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