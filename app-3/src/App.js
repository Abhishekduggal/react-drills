import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      items: ['ice cream', 'coffee', 'pizza', 'coke', 'ice tea', 'sushi'],
      input: ''
    }
  }

  handleInputUser(val) {
    this.setState({
      input: val
    })
  }
  render() {
    const { items, input } = this.state;
    console.log(input);
    let list = items.filter(el => el.includes(input)).map((el, i) => {
      return (
        <div key={i}>
          <h2> {el} </h2>
        </div>
      )
    });
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to my afternoon Project - 3</h1>
          <p>Below is a list items feel free to type in the input box to select any!</p>
        </div>
        <div>
          <input className='input_box' type='text' placeholder="placeholder" onChange={event => this.handleInputUser(event.target.value)} />
        </div>
        {list}

      </div>
    );
  }
}

export default App;
