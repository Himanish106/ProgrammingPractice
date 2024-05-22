import React, { useState, useEffect } from "react";
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
import PublicOrderTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicOrderTable";
import UserTable from "./Components/Subcomponents/Admin/UserTable";
import StateTable from "./Components/Subcomponents/Admin/PrivateEventTables/StateTable";
import CityTable from "./Components/Subcomponents/Admin/PrivateEventTables/CityTable";
import VenueTable from "./Components/Subcomponents/Admin/PrivateEventTables/VenueTable";
import MediaTable from "./Components/Subcomponents/Admin/PrivateEventTables/MediaTable";
import CatererTable from "./Components/Subcomponents/Admin/PrivateEventTables/CatererTable";
import DesignTable from "./Components/Subcomponents/Admin/PrivateEventTables/DesignTable";
import EventTypes from "./Components/Subcomponents/Admin/PrivateEventTables/EventTypes";
import PublicStateTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicStateTable";
import PublicCityTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicCityTable";
import PublicVenueTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicVenueTable";
import PublicMediaTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicMedia";
import PublicCatererTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicCaterer";
import PublicDesignTable from "./Components/Subcomponents/Admin/PublicEventTables/PublicDesigners";
import PublicEventTypes from "./Components/Subcomponents/Admin/PublicEventTables/PublicEventTypes";
import ContactTable from "./Components/Subcomponents/Admin/ContactTable";
import PrivateOrderTable from "./Components/Subcomponents/Admin/PrivateEventTables/PrivateOrderTable";
import TicketInfoTable from "./Components/Subcomponents/Admin/TicketingInfoTable";
import FeedbackTable from "./Components/Subcomponents/Admin/FeedbackTable";
import AdminPanel from "./Components/Subcomponents/Admin/AdminPanel";
import EventTableSelection from "./Components/Subcomponents/Admin/EventTableSelection";
import EventLocations from "./Components/Subcomponents/Admin/EventLocations";
import EventOrders from "./Components/Subcomponents/Admin/EventOrders";
import Profile from "./Components/Subcomponents/ProfilePage/ProfilePage";

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
            <Route
              exact
              path="/ticketbooking/:eventId"
              element={<Ticketing />}
            />
            <Route exact path="/login" element={<ProtectedLogin />} />
            <Route
              exact
              path="/forgetemail"
              element={<ForgetPasswordEmail />}
            />
            <Route exact path="/forgetotp" element={<ForgetPasswordOTP />} />
            <Route exact path="/resetpassword" element={<ResetPassword />} />
            <Route exact path="/adminpanel" element={<AdminPanel />} />
            <Route exact path="/upload" element={<PublicOrderTable />} />
            <Route
              exact
              path="/privateupload"
              element={<PrivateOrderTable />}
            />
            <Route exact path="/privateeventtable" element={<EventTypes />} />
            <Route
              exact
              path="/publiceventtable"
              element={<PublicEventTypes />}
            />
            <Route exact path="/usertable" element={<UserTable />} />
            <Route exact path="/contacttable" element={<ContactTable />} />
            <Route exact path="/feedbacktable" element={<FeedbackTable />} />
            <Route exact path="/statetable" element={<StateTable />} />
            <Route
              exact
              path="/publicstatetable"
              element={<PublicStateTable />}
            />
            <Route exact path="/cities/:stateId" element={<CityTable />} />
            <Route
              exact
              path="/publiccities/:stateId"
              element={<PublicCityTable />}
            />
            <Route exact path="/venues/:cityId" element={<VenueTable />} />
            <Route
              exact
              path="/publicvenues/:cityId"
              element={<PublicVenueTable />}
            />
            <Route exact path="/medias/:venueId" element={<MediaTable />} />
            <Route
              exact
              path="/publicmedias/:venueId"
              element={<PublicMediaTable />}
            />
            <Route exact path="/caterers/:venueId" element={<CatererTable />} />
            <Route
              exact
              path="/publiccaterers/:venueId"
              element={<PublicCatererTable />}
            />
            <Route exact path="/designers/:venueId" element={<DesignTable />} />
            <Route
              exact
              path="/publicdesigners/:venueId"
              element={<PublicDesignTable />}
            />
            <Route
              exact
              path="/ticketinfotable"
              element={<TicketInfoTable />}
            />
            <Route
              exact
              path="/eventtableselection"
              element={<EventTableSelection />}
            />
            <Route exact path="/eventlocations" element={<EventLocations />} />
            <Route exact path="/eventorders" element={<EventOrders />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
