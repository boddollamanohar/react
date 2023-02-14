import React, { Component } from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Navbar from './practice/Navbar'
 class App extends Component {
  render() {
    return (
      <div>
        <Router>
<Navbar/>
        </Router>
      </div>
    )
  }
}

export default App