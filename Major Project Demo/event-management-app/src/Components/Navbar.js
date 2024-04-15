import React, { useState } from "react";
import "./CSS/Navbar.css";
import "../Global Files/global.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>Event</span> Vista
      </Link>
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/services">Services</Link>
        </span>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/feedback">Feedback</Link>
        </span>
        <span>
          <Link to="/eventshowcase">Events</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span className="event-btn-margin">
          <Link to="/eventselection" className="event-btn">
            Plan an Event
          </Link>
        </span>
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
