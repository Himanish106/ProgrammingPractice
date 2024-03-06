import "./App.css";
import About from "./Components/About";
import IntroSection from "./Components/IntroSection";
import Navbar from "./Components/Navbar";
import MySwiper from "./Components/Swiper";

function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <MySwiper />
      <About />
    </>
  );
}

export default App;
