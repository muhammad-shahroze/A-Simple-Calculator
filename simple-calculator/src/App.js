import React, { Component } from 'react';
import './App.css';
import Display from './components/Display'
import Buttons from './components/Buttons'
import Button from './components/Button'

class App extends Component {
  state = { calculations: [0] }
  render() {
    return (
      <div className="App" >
        <h1>Hello</h1>
      </div >
    );
  }
}

export default App;
