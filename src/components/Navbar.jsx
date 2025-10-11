import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (

      <nav>
   <ul className="nav-link">
        <li>
        <NavLink to="/" style={{color:"white", fontWeight:"bold" , fontSize:"22px", backgroundColor:"blue"}}>Students Portals</NavLink>
        </li> 
        <li>
        <NavLink to={'/'} className="active">Home</NavLink>
        </li>
        <li>
        <NavLink to={'/Students'} className="active">Student</NavLink>
        </li>
        <li>
        <NavLink to={'/About'} className="active">About</NavLink>
        </li>
        </ul>
        <ul className="nv1">
        <li>
        <NavLink to={'/Contact'} className="active">Contact</NavLink>
        </li>
        </ul>
      </nav>
  )
}

export default Navbar
