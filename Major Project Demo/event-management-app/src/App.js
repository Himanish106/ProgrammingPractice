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
import PrivateEventBooking from "./Components/Subcomponents/EventBooking/PrivateEventBooking";
import PublicEventBooking from "./Components/Subcomponents/EventBooking/PublicEventBooking";
import EventShowcase from "./Components/Subcomponents/EventShowcase/EventShowcase";
import Ticketing from "./Components/Subcomponents/Ticketing/Ticketing";
import Loginform from "./Components/Subcomponents/LoginForm/LoginForm";
import ForgetPasswordOTP from "./Components/Subcomponents/ForgotPassword/ForgotPasswordOTP";
import ForgetPasswordEmail from "./Components/Subcomponents/ForgotPassword/ForgotPasswordEmail";
import ResetPassword from "./Components/Subcomponents/ForgotPassword/ResetPassword";

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
          <Route exact path="/privateeventbooking" element={<PrivateEventBooking />} />
          <Route exact path="/publiceventbooking" element={<PublicEventBooking />} />
          <Route exact path="/eventshowcase" element={<EventShowcase />} />
          <Route exact path="/ticketbooking" element={<Ticketing />} />
          <Route exact path="/login" element={<Loginform />} />
          <Route exact path="/forgetemail" element={<ForgetPasswordEmail />} />
          <Route exact path="/forgetotp" element={<ForgetPasswordOTP />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
