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
        <nav className='navbar navbar-light navbar-expand-sm'>
          <h3 className='navbar-brand'>Tweet Hunt</h3>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link to="/search">Search</Link>
              </li>
              <li className='nav-item'>
                <Link to="/random">Random</Link>
              </li>
            </ul>
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
