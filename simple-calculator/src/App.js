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
        <Display data={this.state.operations} />
        <Buttons>
          <Button onClick={this.handleClick} label="AC" value="clear" />
          <Button onClick={this.toggleSign} label="+-" value="toggle" />
          <Button onClick={this.handleClick} label="%" value="percent" />
          <Button onClick={this.handleClick} label="+" value="+" />

          <Button onClick={this.handleClick} label="1" value="1" />
          <Button onClick={this.handleClick} label="2" value="2" />
          <Button onClick={this.handleClick} label="3" value="3" />
          <Button onClick={this.handleClick} label="-" value="-" />

          <Button onClick={this.handleClick} label="4" value="4" />
          <Button onClick={this.handleClick} label="5" value="5" />
          <Button onClick={this.handleClick} label="6" value="6" />
          <Button onClick={this.handleClick} label="x" value="*" />

          <Button onClick={this.handleClick} label="7" value="7" />
          <Button onClick={this.handleClick} label="8" value="8" />
          <Button onClick={this.handleClick} label="9" value="9" />
          <Button onClick={this.handleClick} label="/" value="/" />

          <Button onClick={this.handleClick} label="0" value="0" />
          <Button onClick={this.handleClick} label="." value="." />
          <Button onClick={this.handleClick} label="=" size="1" value="equal" />
        </Buttons>
      </div >
    );
  }
}

export default App;
