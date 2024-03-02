import React, { useState } from "react";
import "../Global Files/global.css";
import "./CSS/Navbar.css";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header">
      <a href="#" className="logo">
        <span>Event</span> Vista
      </a>
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Price</a>
        <a href="#">Reviews</a>
        <a href="#">Contact</a>
      </nav>
      <div
        id="menu-bar"
        className={`fas fa-bars ${isActive ? "fa-times" : ""}`}
        onClick={toggleMenu}
      />
    </header>
  );
};
export default Navbar;
