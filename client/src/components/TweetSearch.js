import React, { Component } from 'react';
import TweetCard from './TweetCard';
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
            <div className='search-page-container'>
                <div className='tweet-card'>
                    <div className='search-header'>
                            <h2>Search for a Twitter user</h2>
                            <p>Use the input field below to search for a user within Twitters API</p>
                    </div>
                    <Form>
                        <Form.Group>
                            <div id='input-form' className='row'>
                                <div className='col-auto'>
                                    <Form.Control type='input' className='form-control-md' onKeyDown={this.handleKeyDown} required type='text' value={this.state.searchTerm} onChange={this.handleChange} placeholder='ex. elonmusk'></Form.Control>
                                </div>
                                <div className='col-auto'>
                                    <button className='btn btn-primary btn-md' onClick={this.handleSubmit}>Search</button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <div className='search-tweet-container'>
                    {this.state.tweet.map((tweets, index) =>
                        <TweetCard key={index} tweets={tweets} />
                    )}
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;