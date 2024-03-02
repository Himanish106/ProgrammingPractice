import React from "react";
import "../Global Files/global.css";
import "./CSS/IntroSection.css"
const IntroSection = () => {
  return (
    <section className="header-caption">
      <div className="head-caption">
        <div className="caption">
          <p id="content">
            Where Every Occasion Finds Its 
            <span className="col"> Perfect Stage.</span>
          </p>
        </div>
        <div className="explore-btn">
          <button className="btn">Explore Us</button>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
