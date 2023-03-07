import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import AboutMe from '../AboutMe/AboutMe'

function Navbar() {
  return (
    <div className='NavbarContainer'>
        <div className="navbartitles">
            <Link to="/" className='navbarTitle me'> me </Link>
            <span>  /  </span>
            <Link to="/AboutMe" className='navbarTitle aboutme'> about me </Link>
            <span>  /  </span>
            <Link to="/project" className='navbarTitle projects'> projects </Link>
        </div>
    


    </div>
  )
}

export default Navbar