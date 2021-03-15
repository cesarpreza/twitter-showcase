import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

class TweetSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            isInputValid: true,
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
        if (this.state.searchTerm === '') {
            alert('enter a user')
        } else {
            axios
                .get(`/api?username=${this.state.searchTerm}`)
                .then(res => {
                    this.setState({ tweet: res.data.statuses, searchTerm: '' })
                })
            console.log('submit');
        }
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
                <div className='tweet-card'>
                    <div className='search-header'>
                        <h3>Search for a twitter user using their twitter handle</h3>
                    </div>
                    <form>
                        <input className='input' onKeyDown={this.handleKeyDown} required type='text' value={this.state.searchTerm} onChange={this.handleChange} placeholder='search for a tweet..'></input>
                        <button className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
                <div>
                    {this.state.tweet.map((tweets, index) =>
                        <div className='searchTweetCard'>
                            <p>Text: {tweets.text}</p>
                            <p>Username: {tweets.user.screen_name}</p> {/*add spacing between tweet cards! bootstrap? CSS? */}
                            <p>Retweets: {tweets.retweet_count}</p>
                            <p>favorites: { tweets.favorite_count}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;