import React, { Component } from 'react';
import './App.css';
import Login from './Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React afternoon Project - 4</h2>
        </div>
        <div>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
