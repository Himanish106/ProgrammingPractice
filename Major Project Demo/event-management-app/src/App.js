import React, { useState,useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Subcomponents/HomePage/HomePage";
import AboutUs from "./Components/Subcomponents/AboutUS/AboutUs";
import EventSelection from "./Components/Subcomponents/EventSelection/EventSelection";
import EventShowcase from "./Components/Subcomponents/EventShowcase/EventShowcase";
import Ticketing from "./Components/Subcomponents/Ticketing/Ticketing";
import ForgetPasswordOTP from "./Components/Subcomponents/ForgotPassword/ForgotPasswordOTP";
import ForgetPasswordEmail from "./Components/Subcomponents/ForgotPassword/ForgotPasswordEmail";
import ResetPassword from "./Components/Subcomponents/ForgotPassword/ResetPassword";
import Loader from "./Components/Subcomponents/Loader/Loader";
import ProtectedLogin from "./Components/Subcomponents/LoginForm/ProtectedLogin";
import ProtectedFeedback from "./Components/Subcomponents/Feedback/ProtectedFeedback";
import ProtectedContactUs from "./Components/Subcomponents/ContactUs/ProtectedContactUs";
import ProtectedRegister from "./Components/Subcomponents/Register/ProtectedRegister";
import ProtectedPrivateBooking from "./Components/Subcomponents/EventBooking/ProtectPrivateBooking";
import ProtectedPublicBooking from "./Components/Subcomponents/EventBooking/ProtectPublicBooking";
import PublicOrderTable from "./Components/Subcomponents/Admin/PublicOrderTable";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : (
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<ProtectedContactUs />} />
          <Route exact path="/feedback" element={<ProtectedFeedback />} />
          <Route exact path="/register" element={<ProtectedRegister />} />
          <Route exact path="/eventselection" element={<EventSelection />} />
          <Route
            exact
            path="/privateeventbooking"
            element={<ProtectedPrivateBooking />}
          />
          <Route
            exact
            path="/publiceventbooking"
            element={<ProtectedPublicBooking />}
          />
          <Route exact path="/eventshowcase" element={<EventShowcase />} />
          <Route exact path="/ticketbooking/:eventId" element={<Ticketing />} />
          <Route exact path="/login" element={<ProtectedLogin/>} />
          <Route exact path="/forgetemail" element={<ForgetPasswordEmail />} />
          <Route exact path="/forgetotp" element={<ForgetPasswordOTP />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/upload" element={<PublicOrderTable />} />
        </Routes>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
