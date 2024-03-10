import React from "react";
import joinUS from "../../Images/join.jpeg";
const JoinUS = () => {
  return (
    <section className="contact" id="contact">
      <div className="row">
        <div className="image">
          <img src={joinUS} />
        </div>
        <div className="content">
          <h3>
            Be Part of Our <span className="col">Journey!</span>
          </h3>
          <p>
            Embrace the extraordinary. Join our event community today and be a
            part of crafting extraordinary experiences. Together, we'll turn
            visions into reality and make every moment unforgettable.
          </p>
          <a href="#" className="btn">
            register today!
          </a>
        </div>
      </div>
    </section>
  );
};
export default JoinUS;
