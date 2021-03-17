import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card } from 'react-bootstrap';

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
                        <h3>Search for a user</h3>
                    </div>
                    <Form>
                        <Form.Group>
                            <Form.Label>Search for a Twitter user</Form.Label>
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
                <div>
                    {this.state.tweet.map((tweets, index) =>
                        <Card>
                            <Card.Body>
                                <Card.Text>Text: {tweets.text}</Card.Text>
                                <Card.Text>Username: {tweets.user.screen_name}</Card.Text>
                                <Card.Text>Retweets: {tweets.retweet_count}</Card.Text>
                                <Card.Text>favorites: {tweets.favorite_count}</Card.Text>
                                <Card.Img src={tweets.user.profile_image_url} style={{height: 40, width: 40}} />
                            </Card.Body> 
                             {/*add spacing between tweet cards! bootstrap? CSS? */}
                            
                        </Card>
                    )}
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;