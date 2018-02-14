import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HistoryEraser from './HistoryEraser.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HistoryEraser />
      </div>
    );
  }
}

export default App;
