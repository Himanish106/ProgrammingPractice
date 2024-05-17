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
import StateTable from "./Components/Subcomponents/Admin/StateTable";
import CityTable from "./Components/Subcomponents/Admin/CityTable";
import VenueTable from "./Components/Subcomponents/Admin/VenueTable";
import MediaTable from "./Components/Subcomponents/Admin/MediaTable";
import CatererTable from "./Components/Subcomponents/Admin/CatererTable";
import DesignTable from "./Components/Subcomponents/Admin/DesignTable";
import EventTypes from "./Components/Subcomponents/Admin/EventTypes";
import UserTable from "./Components/Subcomponents/Admin/UserTable";

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
          <Route exact path="/privateeventtable" element={<EventTypes />} />
          <Route exact path="/usertable" element={<UserTable />} />
          <Route exact path="/statetable" element={<StateTable />} />
          <Route exact path="/cities/:stateId" element={<CityTable />} />
          <Route exact path="/venues/:cityId" element={<VenueTable />} />
          <Route exact path="/medias/:venueId" element={<MediaTable />} />
          <Route exact path="/caterers/:venueId" element={<CatererTable />} />
          <Route exact path="/designers/:venueId" element={<DesignTable />} />
        </Routes>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
