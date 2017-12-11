import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

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
