import React from "react";
import "../../CSS/ForgetPassword.css";
const ForgetPasswordOTP = () => {
  return (
    <div className="frgt-password-email">
  <div className="verification-box">
    <h1 className="head-font">OTP Verification</h1>
    <p className="font">Please enter the OTP sent to your email address.</p> 
    <form className="frgt-email-form">
    <input className="frgt-email-field" type="number" name="otp" id="otp" placeholder="Enter Your OTP" required />
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
export default ForgetPasswordOTP;