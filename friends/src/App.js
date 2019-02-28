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
      isEditing: false,
      editId: '',
      friends: [],
      newFriend: {
        name: '',
        age: 0,
        email: ''
      } 
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log('Error: ' + err);
      })
  }

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  handleAddFriend = (e) => {
    e.preventDefault();
    const newFriend = this.state.newFriend;
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ 
          friends: res.data,
          newFriend: {
            name: '',
            age: 0,
            email: ''
          }
        });
      })
      .catch(err => console.log(err))
  }

  handleEditFriend = (e, id) => {
    e.preventDefault();
    const friend = this.state.friends.find(friend => friend.id === id)
    this.setState({ 
      newFriend: friend, 
      isEditing: true,
      editId: id
    })
  }

  handleSubmitEdit = (e) => {
    e.preventDefault();
    const id = this.state.editId;
    axios.put(`http://localhost:5000/friends/${id}`, this.state.newFriend)
      .then(res => {
        console.log(res);
        this.setState({
          isEditing: false,
          editId: '',
          friends: res.data,
          newFriend: {
            name: '',
            age: 0,
            email: ''
          }
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleDeleteFriend = (e, id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <AppContainer>
        <h1>Your "Friends"</h1>
        <FriendsList 
          editFriend={this.handleEditFriend}
          deleteFriend={this.handleDeleteFriend} 
          friends={this.state.friends} 
        />
        <FriendForm 
          isEditing={this.state.isEditing}
          onChange={this.handleChange}
          newFriend={this.state.newFriend}
          submitEdit={this.handleSubmitEdit}
          addFriend={this.handleAddFriend} 
        />
      </AppContainer>
    );
  }
}

export default App;
