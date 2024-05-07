import React, { useState } from "react";
import axios from "axios";
import "../../CSS/ForgetPassword.css";
import Swal from "sweetalert2";

const ForgetPasswordEmail = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/globalcontroller/otp", { email });
      if (response.data) {
        const token = response.data.otp;
        localStorage.setItem("emailToken", token); // Save token in local storage
        Swal.fire({
          icon: "success",
          title: "OTP has been sent successfully to your registered email",
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
            window.location.href = "/forgetotp";
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Email!",
          text: "Please enter your registered email.",
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
      if (error.response && error.response.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email!",
          text: "Please enter your registered email.",
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
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An Error Occurred. Please Try again",
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
    }
  };

  return (
    <div className="frgt-password-email">
      <div className="verification-box">
        <h1 className="head-font">Email Verification</h1>
        <p className="font">Please enter your registered email.</p>
        <form className="frgt-email-form" onSubmit={handleSubmit}>
          <input
            className="frgt-email-field"
            type="email"
            value={email}
            name="otp"
            id="otp"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="button-container">
            <button
              className="btn"
              type="button"
              onClick={() => window.history.back()}
            >
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
