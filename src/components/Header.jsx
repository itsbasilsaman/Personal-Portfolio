import React from 'react'
import { useState } from 'react';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
       <header className={`header ${isMenuActive ? 'sticky' : ''}`}>
      <div className="logo">My Website</div>
      <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
    </>
  )
}

export default Header