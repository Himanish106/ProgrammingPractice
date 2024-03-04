import "./App.css";
import About from "./Components/AboutBrief";
import Contact from "./Components/ContactBrief";
import FeedBack from "./Components/FeedbackBrief";
import Footer from "./Components/Footer";
import IntroSection from "./Components/IntroSection";
import JoinUS from "./Components/Join";
import Navbar from "./Components/Navbar";
import ReviewSlider from "./Components/ReviewSlider";
import Service from "./Components/ServiceBrief";
import MySwiper from "./Components/Swiper";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <MySwiper />
      <About />
      <Service />
      <Contact />
      <ReviewSlider />
      <FeedBack />
      <JoinUS />
      <Footer />
    </>
  );
}

export default App;
