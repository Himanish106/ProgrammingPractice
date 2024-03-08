import React from "react";
const Service = () => {
  return (
    <section className="pricing">
  <h1 className="price-heading">Our <span className="col">Services</span></h1>
  <div className="events">
    <div className="private-event">
      <h3 className="title">Private Events</h3>
      <h3 className="amount">Starting from <span className="col">$500</span></h3>
      <ul>
        <li>
          <i className="fas fa-check" />Planning and Coordination
        </li>
        <li>
          <i className="fas fa-check" />Personalized Décor and Design
        </li>
        <li>
          <i className="fas fa-check" />Catering and Culinary Services
        </li>
        <li>
          <i className="fas fa-check" />Entertainment and Activities
        </li>
        <li>
          <i className="fas fa-check" />Event Photography and Videography
        </li>
      </ul>
      <a href="#" className="btn">
        check out
      </a>
    </div>
    <div className="public-event">
      <h3 className="title">Public Events</h3>
      <h3 className="amount">Starting from <span className="col">$800</span></h3>
      <ul>
        <li>
          <i className="fas fa-check" />Event Promotion and Marketing
        </li>
        <li>
          <i className="fas fa-check" />Ticketing and Registration Management
        </li>
        <li>
          <i className="fas fa-check" />Venue Selection and Logistics
        </li>
        <li>
          <i className="fas fa-check" />On-Site Event Management
        </li>
        <li>
          <i className="fas fa-check" />Vendor Coordination and Support
        </li>
      </ul>
      <a href="#" className="btn">
        check out
      </a>
    </div>
  </div>
</section>

  );
};
export default Service;
