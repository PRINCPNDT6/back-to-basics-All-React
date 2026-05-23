import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
function Navbar() {
  return (
    <>
    <ul>
  
        <li>
            <NavLink to = 'home' className={({isActive}) => isActive ?    "active-link" : "" }> 
                Home 
            </NavLink>
          </li>
        <li>
            <NavLink to = 'about' className={({isActive}) => isActive ?    "active-link" : "" }> 
                About 
            </NavLink>
          </li>
        <li>
            <NavLink to = 'service' className={({isActive}) => isActive ?    "active-link" : "" }> 
                Service 
            </NavLink>
          </li>
        
         
    </ul>
    </>
  )
}

export default Navbar