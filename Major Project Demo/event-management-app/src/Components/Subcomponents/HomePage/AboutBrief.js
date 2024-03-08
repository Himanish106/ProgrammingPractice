import React from "react";
import aboutImg from "../../Images/about-us.gif";
const About = () => {
  return (
    <section className="about-web">
      <div className="about-sub">
        <div className="about-sub1">
          <p className="about-content-head">Welcome to <span className="col"> Event Vista!</span></p>
          <p className="about-content-body">
            At Event Vista, we specialize in crafting unforgettable events
            tailored to your unique vision. Our experienced team handles every
            detail, from venue selection to entertainment, ensuring a seamless
            and memorable experience for you and your guests.
          </p>
          <p className="about-content-foot">
            Explore our services and portfolio to learn more, and let us bring
            your vision to life!
          </p>
          <div className="explore-btn">
          <button className="btn">About Us</button>
        </div>
        </div>
        <div className="about-sub2">
          <img src={aboutImg} alt="about us" />
        </div>
      </div>
    </section>
  );
};
export default About;
