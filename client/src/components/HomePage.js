import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Make Axios call to server to display tweetData hardcoded into server.js

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userTweet: []
        }
    }

    async componentDidMount() {
        const tweetUrl = await axios.get(`/api/tweets`);
        const tweetResponse = tweetUrl.data;
        this.setState({userTweet: tweetResponse})
        
        console.log(this.state.userTweet);
    }

    


    render() {
    return (
            <div>
                <div>
                <nav className='navbar navbar-light navbar-expand-sm'
                    style={{ backgroundColor: 'lightblue' }} >
                        <h3 className='navbar-brand'>Tweet Hunt</h3>
                            <div className='collapse navbar-collapse' id='menuContainer'>
                                <ul className='navbar-nav ml-auto'>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to='/search'>
                                                    <button className='btn btn-primary'>Search</button>
                                                </Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link className='nav-link' to='/random'>
                                                    <button className='btn btn-primary' >Random Tweet</button>
                                                </Link>
                                            </li>
                                        </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <h1>Home Page</h1>
                    <hr />
                <ul>
                    {this.state.userTweet.map(data => {
                        return <div>
                                    <li key={data.id}> {data.name} </li>
                                    <li key={data.id}> {data.homeworld} </li>
                                    <li key={data.id}> {data.height} </li>
                                    <li key={data.id}> {data.gender} </li>
                                </div>
                    })}
                </ul>
                </div>
                
            </div>
        )
    }
    }



export default HomePage;