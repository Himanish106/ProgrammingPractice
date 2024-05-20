import React, { useEffect, useState } from "react";
import "./CSS/Navbar.css";
import "../Global Files/global.css";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userFirstName = decodedToken.firstName;
      const userRole = decodedToken.role;
      setFirstName(userFirstName);
      setRole(userRole);
    }
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      width: "500px",
      heightAuto: false,
      customClass: {
        popup: "logout-alert-popup",
        title: "custom-swal2-title",
        confirmButton: "swal2-confirm",
        cancelButton: ".swal2-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location.reload();
        window.location.href = "/login";
      }
    });
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>Event</span> Vista
      </Link>
      <nav className={`navbar ${isActive ? "active" : ""}`}>
        {localStorage.getItem("token") ? (
          <>
            {role === "ADMIN" ? (
              <>
                <span>
                  <Link to="/adminpanel">Admin Panel</Link>
                </span>
                <span>
                  <Link to="/profile">Welcome {firstName}</Link>
                </span>
                <span onClick={handleLogout}>
                  <Link to="#">Logout</Link>
                </span>
              </>
            ) : (
              <>
                <span>
                  <Link to="/">Home</Link>
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
                  <Link to="/profile">Welcome {firstName}</Link>
                </span>
                <span onClick={handleLogout}>
                  <Link to="#">Logout</Link>
                </span>
                <span className="event-btn-margin">
                  <Link to="/eventselection" className="event-btn">
                    Plan an Event
                  </Link>
                </span>
              </>
            )}
          </>
        ) : (
          <>
            <span>
              <Link to="/">Home</Link>
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
          </>
        )}
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
