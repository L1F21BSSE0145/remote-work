import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (

      <nav>
      <ul className="nv1">
        <li>
        <NavLink to="/" style={{color:"white", fontWeight:"bold" , fontSize:"22px", backgroundColor:"blue"}}>Students Portals</NavLink>
        </li> 
        </ul>
        <ul className="nav-link">
        <li>
        <NavLink to={'/Home'} className="active">Home</NavLink>
        </li>
        <li>
          <NavLink to={'/'} className="active">Signup</NavLink>
        </li>
        <li>
        <NavLink to={'/Register'} className="active">Register</NavLink>
        </li>
        <li>
        <NavLink to={'/Students'} className="active">Student</NavLink>
        </li>
        <li>
        <NavLink to={'/Subjects'} className="active">Subjects</NavLink>
        </li>
        <li>
        <NavLink to={'/CGPA'} className="active">CGPA</NavLink>
        </li>

        {/* <li>
        <NavLink to={'/About'} className="active">About</NavLink>
        </li>
        <li>
        <NavLink to={'/Contact'} className="active">Contact</NavLink>
        </li> */}
         </ul>
      </nav>
  )
}

export default Navbar
