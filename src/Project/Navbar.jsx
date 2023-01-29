import React, { Component } from 'react'

 class Navbar extends Component {
  render() {
    return (
        <div className="navbar navbar-dark bg-dark navbar-exapand-large">
            <link to="home" className='navbar-brand'>Hello Welcome </link>
            <div className="ml-auto">
                <ul className='navbar-nav'>
                    <li className='navbar-item'><link to="./About" className='navbar-link'> About</link></li>
                    <li className='navbar-item'><link to="./Home" className='navbar-link'> Home</link></li>
                    <li className='navbar-item'><link to="./Product" className='navbar-link'> Product</link></li>
                    <li className='navbar-item'><link to="./" className='navbar-lServicesink'> Services</link></li>
                    <li className='navbar-item'><link to="./Contact" className='navbar-link'> Contact</link></li>
                </ul>
            </div>
        </div>
    )
  }
}

export default Navbar