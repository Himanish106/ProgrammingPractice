import React, { useState } from "react";
import "./CSS/Navbar.css";
import "../Global Files/global.css";
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
        <a href="#home">Home</a>
        <a href="#service">Services</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#price">Price</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
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
