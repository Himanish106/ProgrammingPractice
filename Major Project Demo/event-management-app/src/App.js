import "./App.css";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Subcomponents/HomePage/HomePage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
