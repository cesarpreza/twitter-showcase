import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

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