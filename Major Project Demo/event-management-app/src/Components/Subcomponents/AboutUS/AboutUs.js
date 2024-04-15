import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import AboutUsIntro from "./AboutUsIntro";
import AboutUsCEO from "./AboutUsCEO";
import AboutUsGallery from "./AboutUsGallery";
import "../../CSS/AboutUsGallery.css";
import Mission from "./AboutUsMission";
import SetApart from "./SetApart";
import Goals from "./Goals";
import AboutHead from "./AboutUsHead";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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
          <AboutHead />
          <AboutUsIntro />
          <AboutUsCEO />
          <Mission />
          <SetApart />
          <AboutUsGallery />
          <Goals />
        </>
      )}
    </>
  );
};

export default AboutUs;