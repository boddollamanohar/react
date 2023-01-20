import React, { Component } from 'react'

export class Class2 extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>class2 component</h1>
        <h2>{this.props.name}</h2>
        <h3>{this.props.email}</h3>
      </div>
    )
  }
}

export default Class2