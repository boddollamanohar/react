import React, { Component } from 'react'
import Funcome from './Funcome'

export class Classgo extends Component {
    product='hp laptop'
    price='60k'
    model=' 8 gb rab 234 ssd i5 processor'
  render() {
    return (
      <div>
        <h1>classgo</h1>
        <Funcome product={this.product} price={this.price} model={this.model}/>
      </div>
    )
  }
}

export default Classgo