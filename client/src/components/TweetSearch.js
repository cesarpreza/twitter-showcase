import React, { Component, useDebugValue } from 'react';
import axios from 'axios';

class TweetSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            isInputValid: false,
            tweet: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.HandleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        axios
            .get(`/api?username=${this.state.searchTerm}`)
            .then(res => {
                this.setState({ tweet: res.data.statuses, searchTerm: '' })
            }).catch(err => {
                console.log(err)
            })
        console.log('submit');
    }

    handleKeyDown = e => {
        if (e.key === ' ') {
            e.preventDefault();
        }
    }

    render() {
        console.log(this.state.searchTerm);
        console.log(this.state.tweet)
        return (
            <div className='page-container'>
                <div>
                    <h1>Search for a twitter user</h1>
                    <form>
                        <input onKeyDown={this.handleKeyDown} required type='text' value={this.state.searchTerm} onChange={this.handleChange} placeholder='search for a tweet..'></input>
                        <button onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
                <div>
                    {this.state.tweet.map((tweets, index) =>
                        <div className='tweetCard'>
                            <p>{tweets.text}</p>
                            <p>{tweets.user.screen_name}</p>
                            <p>{tweets.retweet_count}</p>
                            <p>{ tweets.favorite_count}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;