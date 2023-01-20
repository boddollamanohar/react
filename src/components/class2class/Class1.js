import React, { Component } from 'react'
import Class2 from './Class2'

export class Class1 extends Component {
    name='manohar'
    email='iambmanohar@gmail.com'
  render() {
    return (
      <div>
        <h3>class 1 component</h3>
        <Class2 name={this.name} email={this.email}/>
      </div>
    )
  }
}

export default Class1