import React from "react";
import GuardFeedback from "../Feedback/GuardFeedback";
import ContactUs from "./ContactUs";
const ProtectedContactUs = () => {
  return (
    <>
      <GuardFeedback />
      <ContactUs />
    </>
  );
};
export default ProtectedContactUs;
