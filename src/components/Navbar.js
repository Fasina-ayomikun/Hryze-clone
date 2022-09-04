import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-container container'>
        <img src={logo} alt='' />
        <ul className='nav-links'>
          <li className='nav-link'>
            <NavLink to='/about'>Meet Hryze</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/about'>Help Center</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/about'>We are crowdfunding</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/about'>Get in touch</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/about'>We are crowdfunding</NavLink>
          </li>
        </ul>
        <div className='toggle-btn'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
