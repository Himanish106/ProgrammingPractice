import React from "react";
import "../Global Files/global.css";
import "./CSS/ContactBrief.css";
import joinUS from "./Images/join.jpeg"
const JoinUS = () => {
  return (
    <section class="contact" id="contact">
      <div class="row">
      <div class="image">
          <img src={joinUS} alt="" />
        </div>
        <div class="content">
          <h3>Be Part of Our <span className="col">Journey!</span></h3>
          <p>
          Embrace the extraordinary. Join our event community today and be a part of crafting extraordinary experiences. Together, we'll turn visions into reality and make every moment unforgettable.
          </p>
          <a href="#" class="btn">
            register today!
          </a>
        </div>
      </div>
    </section>
  );
};
export default JoinUS;
