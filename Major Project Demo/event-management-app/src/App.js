import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Subcomponents/HomePage/HomePage";
import AboutUs from "./Components/Subcomponents/AboutUS/AboutUs";
import ContactUs from "./Components/Subcomponents/ContactUs/ContactUs";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
