import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Card } from 'react-bootstrap';
import axios from 'axios';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
            <div>
                <main>
                <div>
                    <Card id='welcome-message'>
                        <Card.Header>
                            <h2>Twitter Showcase App</h2>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>This is an application that uses the Twitter API to return Twitter timeline
                                        data. Simply use the navigation bar to either search for any user in Twitters database or use the random
                                        button to see tweets from 5 of my favorite accounts. 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                </main>
            </div>
        )
    }
    }



export default HomePage;