import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Subcomponents/HomePage/HomePage";
import AboutUs from "./Components/Subcomponents/AboutUS/AboutUs";
import ContactUs from "./Components/Subcomponents/ContactUs/ContactUs";
import FeedbackPage from "./Components/Subcomponents/Feedback/FeedbackPage";
import Register from "./Components/Subcomponents/Register/Register";
import EventSelection from "./Components/Subcomponents/EventSelection/EventSelection";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/feedback" element={<FeedbackPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/eventselection" element={<EventSelection />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
