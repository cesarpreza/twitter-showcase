import './App.css';
import React from 'react';
import HomePage from './components/HomePage';
import TweetSearch from './components/TweetSearch';
import RandomTweet from './components/RandomTweet';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
