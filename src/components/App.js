import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';

class App extends Component {
  render() {
    return (
      <div>
        <h2>User List</h2>
        <UserList />
        <h2>User Details:</h2>
        <UserDetail />
      </div>
    );
  }
}

export default App;
