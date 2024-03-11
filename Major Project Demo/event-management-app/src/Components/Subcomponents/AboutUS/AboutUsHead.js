import React from "react";
import "../../CSS/IntroSection.css"
import "../../CSS/AboutUsHead.css"
const AboutHead = () => {
  return (
    <section className="header-caption bg-image">
      <div className="head-caption">
        <div className="caption">
          <p id="content">
          Discovering Our Journey
            <span className="color">  Unveiling the Story</span>
          </p>
        </div>
        <div className="explore-btn">
          <button className="btn">Explore Us</button>
        </div>
      </div>
    </section>
  );
};
export default AboutHead;