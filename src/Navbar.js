import React, { Component } from 'react'
class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">  
        {/* <a href="#" class="navbar-brand"> Manohar_Tech</a> */}
        <div class="ml-auto">
            <ul class="navbar-nav">
                <li class="nav-list"><a href="./index.html" class="nav-link">Home</a></li>
                <li class="nav-list"><a href="./about.html" class="nav-link">About</a></li>
                <li class="nav-list"><a href="./service.html" class="nav-link">Services</a></li>
                <li class="nav-list"><a href="./employee.html" class="nav-link">Employees</a></li>
                <li class="nav-list"><a href="./product.html" class="nav-link">Products</a></li>
                <li class="nav-list"><a href="./contact.html" class="nav-link">Contact</a></li>
                <li class="nav-list"><a href="./login.html" class="nav-link">Login</a></li>

            </ul>
        </div>
    </nav>  
    )
    }
}

export default Navbar
