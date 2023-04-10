import React, { Component } from 'react'

 class Message2 extends Component {
    state = {
        message:"hello"
    }
    gmHandler =()=> {
        this.setState ({message:"vasu is waste fellow"})

    }
    gnHandler = ()=> {
        this.setState ({message:"vasu is dhunnapoothu"})

    }
  render() {
    return (
      <div>
        <h4>Message:{this.state.message}</h4>
        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gnHandler}>gn</button>

      </div>
    )
  }
}

export default Message2