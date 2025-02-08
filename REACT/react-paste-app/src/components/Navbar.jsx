import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavBar'>
      <NavLink 
      to="/"
      >
        Home
      </NavLink>
      
      <NavLink 
      to="/pastes"
      >
        Paste
      </NavLink>
    </div>
  )
}

export default Navbar
