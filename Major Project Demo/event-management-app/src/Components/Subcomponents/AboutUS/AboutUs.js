import React from "react";
import AboutUsIntro from "./AboutUsIntro";
import AboutUsCEO from "./AboutUsCEO";
import AboutUsGallery from "./AboutUsGallery";
import "../../CSS/AboutUsGallery.css";
import Mission from "./AboutUsMission";
import SetApart from "./SetApart";
import Goals from "./Goals";
const AboutUs = () => {
  return (
    <>
      <AboutUsIntro />
      <AboutUsCEO />
      <Mission />
      <SetApart />
      <AboutUsGallery />
      <Goals />
    </>
  );
};
export default AboutUs;
