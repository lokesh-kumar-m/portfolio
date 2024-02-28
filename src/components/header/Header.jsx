import React, { useState } from "react";
import "./header.css"
const Header= () =>{
  const[Toggle,showMenu]=useState(false);
    return(
        <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">Dev</a>
          
          <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
            <ul className="nav__list">
              <li className="nav_item">
                <a href="#home" className='nav_link active_link'>
                  <i className='uil uil-estate nav__icon'></i>Home
                </a>
              </li>
              
              <li className="nav_item">
                <a href="#about" className='nav_link active_link'>
                  <i className='uil uil-user-circle nav__icon'></i>About
                </a>
              </li>

              <li className="nav_item">
                <a href="#skill" className='nav_link active_link'>
                  <i className='uil uil-file-alt nav__icon'></i>Skills
                </a>
              </li>

              <li className="nav_item">
                <a href="#projects" className='nav_link'>
                  <i className='uil uil-box nav__icon'></i>Projects
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact" className='nav_link'>
                <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" onClick={() =>showMenu(!Toggle) }></i>
          </div>
          <div className="nav__toggle" onClick={() =>showMenu(!Toggle) }>
          <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    )
}
export default Header;