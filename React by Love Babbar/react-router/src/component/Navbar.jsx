import React from 'react'
import Home from './Home'
import About from './About'
import Dasboard from './Dasboard'
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
       <div className="navBar">
         <ul>
            <li><Link to = '/about'>About</Link></li>
            <li> <Link to = '/contact'>Contact Us</Link></li>
            <li> <Link to = '/dasboard'>Dasboard</Link></li>
            <li><Link to = '/home'>Home</Link></li>
            <li> <Link to = '/login'>Login</Link></li>
            <li> <Link to = '/signin'>Sign In</Link></li>
        </ul>
       </div>
    </>
  )
}

export default Navbar