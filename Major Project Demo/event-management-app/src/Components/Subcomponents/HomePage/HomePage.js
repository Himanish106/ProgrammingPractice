import React, { useEffect, useRef, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const headingRef = useRef(null);

  const scrollToHeading = () => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#292827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CirclesWithBar
            height="250"
            width="200"
            color=" var(--emphasis-text)"
            outerCircleColor="var( --theme-color)"
            innerCircleColor="var(--emphasis-text)"
            barColor="var(--text-color)"
            ariaLabel="circles-with-bar-loading"
            visible={true}
          />
        </div>
      ) : (
        <>
      <IntroSection scrollToHeading={scrollToHeading} />
      <MySwiper headingRef={headingRef} />
      <About />
      <Service />
      <Contact />
      <ReviewSlider />
      <FeedBack />
      <JoinUS />
    </>
     )}
     </>
  );
};
export default HomePage;
