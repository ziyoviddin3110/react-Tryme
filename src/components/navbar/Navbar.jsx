import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
      
            <NavLink to="/">      <img src="/public/imgs/Logo PNG 1.svg" alt="" /></NavLink>
           <div className="logo_links">
           <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
      
        <li>
          <NavLink to="/About" className="nav-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
            <button>Cart 0</button>
           </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar