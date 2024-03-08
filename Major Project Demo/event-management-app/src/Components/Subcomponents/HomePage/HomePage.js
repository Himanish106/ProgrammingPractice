import React from "react";
import IntroSection from "./IntroSection";
import MySwiper from "./Swiper";
import About from "./AboutBrief";
import Service from "./ServiceBrief";
import Contact from "./ContactBrief";
import ReviewSlider from "./ReviewSlider";
import FeedBack from "./FeedbackBrief";
import JoinUS from "./Join";
import "../../CSS/IntroSection.css";
import "../../CSS/ContactBrief.css";
import "../../CSS/FeedbackBrief.css";
import "../../CSS/Swiper.css";
import "../../CSS/AboutBrief.css";
import "../../CSS/ReviewSlider.css";
import "../../CSS/ServiceBrief.css";
import "../../../Global Files/global.css";
const HomePage = () => {
  return (
    <>
      <IntroSection />
      <MySwiper />
      <About />
      <Service />
      <Contact />
      <ReviewSlider />
      <FeedBack />
      <JoinUS />
    </>
  );
};
export default HomePage;
