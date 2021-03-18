import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card } from 'react-bootstrap';
import RetweetIcon from '../images/retweet.png';
import LikesIcon from '../images/heart.png';

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
                        <h3>Search for a Twitter user</h3>
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
                        <Card key={index} id='search-card' style={{ width: '50%' }} className='bg-light'>
                                <Card.Header>
                                    <Card.Img className='rounded-circle' variant='top' src={tweets.user.profile_image_url} style={{height: 50, width: 50}} />
                                    <Card.Title>{tweets.user.screen_name}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>{tweets.text}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small>
                                    <img src={RetweetIcon} style={{height: 20, width: 20}} />
                                        {tweets.retweet_count}
                                </small>
                                <small>
                                    <img src={LikesIcon} style={{height: 20, width: 20}} />
                                    {tweets.favorite_count}
                                </small>
                                </Card.Footer>
                             {/*add spacing between tweet cards! bootstrap? CSS? */}
                        </Card>
                    )}
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;