import React, { Component } from 'react'

export class Class extends Component {
  render() {
    return (
      <div>
        <h1>class component</h1>
        <h1>{this.props.name}</h1>
        <h2>{this.props.loc}</h2>
        <h2>{this.props.role}</h2>
      </div>
    )
  }
}

export default Class