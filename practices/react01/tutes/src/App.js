import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Subject from './Subject.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      title: "Welcome"
    }
  }

  changeTitle(title) {
    this.setState({title: title});
    console.log(`this = ${this.state.title}`);

  }

  render() {
    return (
      <div className="App">
        <h1>React practice</h1>

        <Subject changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
      </div>
    );
  }
}

export default App;
