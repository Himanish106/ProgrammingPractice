import React from "react";
import "../Global Files/global.css";
import "./CSS/ContactBrief.css";
import joinUS from "./Images/join.jpeg"
const JoinUS = () => {
  return (
    <section class="contact" id="contact">
      <div class="row">
        <div class="content">
          <h3>Be Part of Our Journey!</h3>
          <p>
          Embrace the extraordinary. Join our event community today and be a part of crafting extraordinary experiences. Together, we'll turn visions into reality and make every moment unforgettable.
          </p>
          <a href="#" class="btn">
            reach us
          </a>
        </div>
        <div class="image">
          <img src={joinUS} alt="" />
        </div>
      </div>
    </section>
  );
};
export default JoinUS;
