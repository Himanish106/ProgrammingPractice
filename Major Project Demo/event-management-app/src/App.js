import "./App.css";
import About from "./Components/AboutBrief";
import Contact from "./Components/ContactBrief";
import IntroSection from "./Components/IntroSection";
import Navbar from "./Components/Navbar";
import Service from "./Components/ServiceBrief";
import MySwiper from "./Components/Swiper";

function App() {
  return (
    <>
      <Navbar />;
      <IntroSection />
      <MySwiper />
      <About />
      <Service />
      <Contact />
    </>
  );
}

export default App;
