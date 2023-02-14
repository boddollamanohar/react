import React, { Component } from 'react'
import {link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark navbar-expand-lg'>
<link  to="/Index"> REact contact app </link>

<div>
    <ul className='navbar-nav'>
        <li className='nav-item'>
        <link  to="/Contact" className='navlink'>contact  </link>

        </li>
    </ul>
</div>
      </nav>
    )
  }
}

export default Navbar