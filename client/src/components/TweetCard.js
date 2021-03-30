import React from 'react';
import { Card } from 'react-bootstrap';
import RetweetIcon from '../images/retweet.png';
import LikesIcon from '../images/heart.png';

function TweetCard( { tweets }) {
    return (
        <Card id='search-card'>
                                <Card.Header>
                                    <Card.Img className='rounded-circle' variant='top' src={tweets.user.profile_image_url} style={{height: 45, width: 45}} />
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{tweets.user.screen_name}</Card.Title>
                                    <Card.Text>{tweets.text}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className='icon'>
                                    <img src={RetweetIcon} style={{height: 20, width: 20}} />
                                        {tweets.retweet_count}
                                </small>
                                <small className='icon'>
                                    <img src={LikesIcon} style={{height: 20, width: 20}} />
                                    {tweets.favorite_count}
                                </small>
                                </Card.Footer>
                        </Card>
    )
}

export default TweetCard
