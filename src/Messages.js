import React, { Component } from 'react'

 class Messages extends Component {
    state = {
        message : "hello"
    }
    gmHandler =() =>{
        this.setState({message : "hello Good morning"})
    }
    gnHandler =() =>{
        this.setState({message : "hello Good ni8"})
    }
  render() {
    return (
      <div>
<h2>message: {this.state.message}</h2>
<button onClick={this.gmHandler} >gm</button>
<button onClick={this.gnHandler} >gn</button>
      </div>
    )
  }
}

export default Messages