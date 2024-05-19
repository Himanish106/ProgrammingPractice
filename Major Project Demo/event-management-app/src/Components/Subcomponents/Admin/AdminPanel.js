import React from "react";
import "../../CSS/AdminPanel.css";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="admin-parent-container">
    <div className="admin-container">
      <div className="admin-sections">
        <div className="admin-section">
          <Link to="/usertable" className="logo">
            <button className="admin-btn">
              <span>
                <i className="fa-solid fa-user admin-symbol"></i>
              </span>
              &nbsp;Users
            </button>
          </Link>
        </div>
        <div className="admin-section">
          <Link to="/eventtableselection">
            <button className="admin-btn">
              <span>
                <i className="fa-solid fa-phone admin-symbol"></i>
              </span>
              &nbsp; Event Types
            </button>
          </Link>
        </div>
        <div className="admin-section">
          <Link to="/feedbacktable">
            <button className="admin-btn">
              <span>
                <i className="fa-solid fa-message admin-symbol"></i>
              </span>
              &nbsp; Feedbacks
            </button>
          </Link>
        </div>
        <div className="admin-section">
          <Link to="/contacttable">
            <button className="admin-btn">
              <span>
                <i className="fa-solid fa-phone admin-symbol"></i>
              </span>
              &nbsp; Contacts
            </button>
          </Link>
        </div>
        <Link to="/eventlocations">
        <div className="admin-section">
          <button className="admin-btn">
            <span>
              <i className="fa-solid fa-credit-card admin-symbol"></i>
            </span>
            &nbsp; Event Locations
          </button>
        </div>
        </Link>
        <div className="admin-section">
          <Link to="/ticketinfotable">
            <button className="admin-btn">
              <span>
                <i className="fa-solid fa-credit-card admin-symbol"></i>
              </span>
              &nbsp; Event Tickets
            </button>
          </Link>
        </div>
        <div className="admin-section">
          <Link to="/eventorders">
            <button className="admin-btn">
              <span>
                <i className="fa-solid fa-credit-card admin-symbol"></i>
              </span>
              &nbsp; Event Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminPanel;
