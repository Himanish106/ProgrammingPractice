import React from "react";
const IntroSection = ({ scrollToHeading }) => {
  return (
    <section className="header-caption home-bg">
      <div className="head-caption">
        <div className="caption">
          <p id="content">
            Where Every Occasion Finds Its 
            <span className="col"> Perfect Stage.</span>
          </p>
        </div>
        <div className="explore-btn">
          <button className="btn" onClick={scrollToHeading}>Explore Us</button>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
