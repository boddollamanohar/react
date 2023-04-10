import React, { Component } from 'react'

class Counter extends Component {
    state={
        qty:10
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty +1})

    }
    decrHandler=()=>{

        this.setState({qty: this.state.qty -1})

    }
  render() {
    return (
      <div>
        <h2> quantity={this.state.qty}</h2>
        <button onClick={this.incrHandler}>INCR</button>
        <button onclick={this.decrHandler}>DECR</button>
      </div>
    )
  }
}

export default Counter