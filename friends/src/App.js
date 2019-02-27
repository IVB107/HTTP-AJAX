import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: ''
    }
  }

  componentDidMount() {
    console.log('CDM now running...');
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log('Error: ' + err);
        this.setState({ error: err })
      })
  }

  render() {
    return (
      <div className="App">
        <p>Derps on derps, g sauce.</p>
      </div>
    );
  }
}

export default App;
