import React, { Component } from 'react';
import axios from 'axios';

class TweetSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.HandleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        axios.get(`api/searchTerm=${this.state.searchTerm}`)
            .then(res => {
                this.setState({ searchTerm: e.target.value })
        })
        
        
    }

    // handleClick = e => {
    //     e.preventDefault();
    //     axios
    //       .get(`/api/searchTerm=${this.state.searchTerm}`)
    //       .then(response => {
    //         this.setState({ //set state here });
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   };

    handleSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }

    render() {
        console.log(this.state.searchTerm);
        return (
            <div className='page-container'>
                <div>
                    <h1>Search for a twitter user</h1>
                    <form onChange={this.handleChange}>
                        <input type='text' placeholder='search for a tweet..'></input>
                        <button onClick={this.handleSubmit}>Search</button>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default TweetSearch;