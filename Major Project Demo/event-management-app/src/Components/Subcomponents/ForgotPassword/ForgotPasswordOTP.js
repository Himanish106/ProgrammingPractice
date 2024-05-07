import React, { useState } from "react";
import "../../CSS/ForgetPassword.css";
import axios from "axios";
import Swal from "sweetalert2";
const ForgetPasswordOTP = () => {
  const [otp, setOTP] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/globalcontroller/verifyotp",
        { otp }
      );
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "OTP Verified",
          confirmButtonText: "OK",
          width: "500px",
          customClass: {
            container: "custom-swal-container",
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            text: "custom-swal-content",
            footer: "custom-swal-footer",
            confirmButton: "custom-swal-confirm-button",
          },
        }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
            window.location.reload();
            window.location.href = "/resetpassword";
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP!",
          text: "Something went wrong",
          confirmButtonText: "OK",
          width: "500px",
          customClass: {
            container: "custom-swal-container",
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            text: "custom-swal-content",
            footer: "custom-swal-footer",
            confirmButton: "custom-swal-confirm-button",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response && error.response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Invalid OTP",
          text: "The entered OTP is incorrect. Please try again.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while verifying OTP. Please try again later.",
        });
      }
    }
  };
  return (
    <div className="frgt-password-email">
      <div className="verification-box">
        <h1 className="head-font">OTP Verification</h1>
        <p className="font">Please enter the OTP sent to your email address.</p>
        <form className="frgt-email-form" onSubmit={handleSubmit}>
          <input
            className="frgt-email-field"
            type="number"
            name="otp"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            id="otp"
            placeholder="Enter Your OTP"
            required
          />
          <div className="button-container">
            <button className="btn" onClick={() => window.history.back()}>
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
