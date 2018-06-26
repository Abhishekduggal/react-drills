import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {

  constructor() {
    super();

    this.state = {
      list: [],
      input: ''

    }
    this.addTask = this.addTask.bind(this);

  }

  inputChange(val) {
    this.setState({
      input: val
    });
  }
  // Spread Operator - ... array
  addTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  render() {

    let list = this.state.list.map((elem, i) => {
      return (
        <Todo key={i} task={elem} />
      )
    })
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my Project 6</h2>
          <h2>My to-do list:</h2>
        </div>
        <input value={this.state.input}
          placeholder='Enter Todo !'
          onChange={(e) => this.inputChange(e.target.value)} />
        <div>
          <button onFocus={this.addTask}>Hover Over</button>
        </div>
        <div>{list}</div>
      </div>
    );
  }
}

export default App;
