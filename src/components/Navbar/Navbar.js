import React from 'react'
import {Nav, NavItem, NavLink } from 'reactstrap'
import {Link} from 'react-router-dom'
import './Navbar.css'
const NavbarComponent = () => {

    return (
        <div className="navbar-wrapper row bg-dark">

            <div className="wrapper-left col">
            <h5>Test</h5>
            </div>
            <div className="wrapper-right col justify-content-between">
            <Nav className="justify-content-around">
            <NavItem>
                
                <Link className="link" to="/" className="Home" style={{ textDecoration: 'none'}}>Home</Link>
         
            </NavItem>
            <NavItem>
                
                <Link className="link" to="/users" className="Home" style={{ textDecoration: 'none'}}s>Users</Link>
           
            </NavItem>
            </Nav>
            </div>
        </div>
    )
}

export default NavbarComponent

