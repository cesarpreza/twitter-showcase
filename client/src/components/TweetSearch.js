import React,  { Component } from 'react';

class TweetSearch extends Component {
    render() {
        return (
            <div className='page-container'>
                <div>
                    <h1>Search Page</h1>
                    <input type='text' placeholder='search for a tweet..'></input>
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;