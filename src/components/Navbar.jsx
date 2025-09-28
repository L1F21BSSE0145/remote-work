import React from 'react' 
import "./Navbar.css"

const Navbar = () => {
  return (
      <nav>
        <div className="navbar">
        <a href="#">Login</a>
        <a href="#">SignUp</a>
        <a href="#">About</a>
        </div>
        <div className="nv1">
        <a href="#">Contact</a>
        </div>
      </nav>
  )
}

export default Navbar
