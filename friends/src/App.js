import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

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
      <AppContainer>
        <h1>Your "Friends"</h1>
        <FriendsList friends={this.state.friends} />
        <FriendForm />
      </AppContainer>
    );
  }
}

export default App;
