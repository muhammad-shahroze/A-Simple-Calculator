import React, { Component } from 'react';
import './App.css';
import Display from './components/Display'
import Buttons from './components/Buttons'
import Button from './components/Button'
import update from 'immutability-helper'
import math from 'mathjs'

class App extends Component {
  state = { calculations: [0] }

  handleClick = e => {
    // console.log(e)
    const value = e.target.getAttribute('data-value')
    console.log(value)
    switch (value) {
      case 'clear':
        this.setState({
          operations: ['0']
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const calculations = update(this.state.calculations, {
          $push: [value],
        })
        this.setState({
          calculations: this.state.calculations === 0 ? [value] : calculations,
        })
        break
    }
  }

  calculateOperations = () => {
    let finalResult = this.state.calculations.join('')
    if (finalResult) {
      finalResult = math.eval(finalResult)
      finalResult = math.format(finalResult, { precision: 14 })
      finalResult = String(finalResult)
      this.setState({
        calculations: [finalResult],
      })
    }
  }


  render() {
    return (
      <div className="App" >
        <Display data={this.state.calculations} />
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
