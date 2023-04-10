import React, { Component } from 'react'

 class Message extends Component {
    state ={
        qty:1
    }
    incrHandler=()=>{
        
        this.setState({qty:this.state.qty +1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty -1 })

    }

  render() {
    return (
      <div>
        <h2>quantity : {this.state.qty}</h2>
        <button onClick={this.incrHandler}>incr</button>
        <button onClick={this.decrHandler}>Decr</button>
      </div>
    )
  }
}

export default Message