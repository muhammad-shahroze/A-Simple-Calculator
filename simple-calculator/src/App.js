import React, { Component } from 'react'
import "./App.css";
import Display from './components/Display'
import Buttons from './components/Buttons'
import Button from './components/Button'
import update from 'immutability-helper'
import math from 'mathjs'

class App extends Component {
  state = { operations: ['0'] }

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
        if (this.state.operations[0] === '0') {
          this.setState({
            operations: [],
          }, () => {
            this.updatecalc(value)
          })
        }
        else {
          this.updatecalc(value)
        }
        break
    }
  }

  updatecalc = (value) => {
    const newOperations = update(this.state.operations, {
      $push: [value],
    })
    this.setState({
      operations: this.state.operations === 0 ? [value] : newOperations,
    })
  }

  calculateOperations = () => {
    let finalResult = this.state.operations.join('')
    if (finalResult) {
      finalResult = math.eval(finalResult)
      finalResult = math.format(finalResult, { precision: 14 })
      finalResult = String(finalResult)
      this.setState({
        operations: [finalResult],
      })
    }
  }

  toggleSign = () => {
    const { operations } = this.state;
    console.log(operations)
    const signOperation = operations.filter(number =>
      number.charAt(0) === '-' ? number.substr(1) : '-' + number)
    this.setState({
      operations: signOperation,
    })
  }

  inputPercent = () => {
    const { operations } = this.state
    let value = operations.join('')
    this.setState({
      operations: [parseFloat(value / 100).toFixed(2)]
    })
  }

  render() {
    return (
      <div className="App">
        <Display data={this.state.operations} />
        <Buttons>
          <Button onClick={this.handleClick} label="AC" value="clear" />
          <Button onClick={this.toggleSign} label="+-" value="toggle" />
          <Button onClick={this.inputPercent} label="%" value="percent" />
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
      </div>
    );
  }
}

export default App;
