import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import TweetSearch from './components/TweetSearch';
import RandomTweet from './components/RandomTweet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className='navbar navbar-dark navbar-expand-sm'>
          <h3 className='navbar-brand'>Tweet Finder</h3>
            <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarMenu'>
              <span className='navbar-toggler-icon'></span>
            </button>
          <div class='collapse navbar-collapse' id='navbarMenu'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to="/">
                  <button className='btn btn-secondary'>Home</button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/search">
                  <button className='btn btn-secondary'>Search</button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="/random">
                  <button className='btn btn-secondary'>Random Tweet</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/search' exact component={TweetSearch} />
            <Route path='/random' exact component={RandomTweet} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
