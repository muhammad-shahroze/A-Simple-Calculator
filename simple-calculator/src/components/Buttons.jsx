import React, { Component } from 'react'

class Buttons extends Component {
  render() {
    // console.log(this.props.children)
    return (
      <div className="Buttons">
        {this.props.children}
      </div>
    )
  }
}

export default Buttons