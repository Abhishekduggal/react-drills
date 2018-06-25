import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      project: ['Hi', 'Welcome', 'to', 'my', 'Project']
    };
  }

  render() {
    const { project } = this.state;
    let res = project.map((el, i) => {
      return (
        <div key={i} >
          <h2>{el}</h2>
        </div>
      )
    });
    return (
      <div className="App">
        <div className="App-header">
          This is my afternoon Project - React Drills - 2
        </div>
        {res}

      </div>
    );
  }
}

export default App;
