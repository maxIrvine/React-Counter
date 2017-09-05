import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Counter from './Counter'
import CountHandler from './CountHandler';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountHandler />
      </div>
    );
  }
}

export default App;
