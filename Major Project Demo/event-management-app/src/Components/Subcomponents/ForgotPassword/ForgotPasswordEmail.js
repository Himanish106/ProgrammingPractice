import React from "react";
import "../../CSS/ForgetPassword.css";
const ForgetPasswordEmail = () => {
  return (
    <div className="frgt-password-email">
  <div className="verification-box">
    <h1 className="head-font">Email Verification</h1>
    <p className="font">Please enter your registered email.</p> 
    <form className="frgt-email-form">
    <input className="frgt-email-field" type="email" name="otp" id="otp" placeholder="Enter Your Email" required />
      <div className="button-container">
        <button className="btn" onclick="window.history.back()">
          Back
        </button>
        <button className="btn" type="submit">
          Verify
        </button>
      </div>
    </form>
  </div>
</div>

  );
};
export default ForgetPasswordEmail;