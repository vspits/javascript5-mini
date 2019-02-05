import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      myName: 'Joe'
    }
  }
  render() {
    return (
      <div className="App">
        My name is { this.state.myName }
      </div>
    );
  }
}

export default App;
