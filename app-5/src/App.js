import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my Project 5</h2>
        </div>
        <Image photo={"http://via.placeholder.com/350x150"} />
      </div>
    );
  }
}

export default App;
