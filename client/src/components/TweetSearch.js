import React, { Component, useDebugValue } from 'react';
import axios from 'axios';

class TweetSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
            tweet: null,
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
                this.setState({tweet: res.data.statuses[0], searchTerm: ''})
            })
        console.log('submit');
    }

    render() {
        console.log(this.state.searchTerm);
        console.log(this.state.tweet)
        return (
            <div className='page-container'>
                <div>
                    <h1>Search for a twitter user</h1>
                    <form onChange={this.handleChange}>
                        <input type='text' placeholder='search for a tweet..'></input>
                        <button onClick={this.handleSubmit}>Search</button>
                        {this.state.tweet !== null ? 
                            <div>
                                <p>Username: {this.state.tweet.user.screen_name}</p>
                                <p>Tweet: { this.state.tweet.text }</p>
                            </div> :
                            null }
                    </form>
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;