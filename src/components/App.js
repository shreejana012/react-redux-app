import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends Component {
  render() {
    return (
      <div>
        <h2>User List</h2>
        <UserList />
        <h2>User Details:</h2>
        <UserDetails />
      </div>
    );
  }
}

export default App;
