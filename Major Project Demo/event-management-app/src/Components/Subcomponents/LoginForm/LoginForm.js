import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
const Loginform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const profileUpdated = localStorage.getItem("profileUpdated");
    if (profileUpdated) {
      Swal.fire({
        icon: "success",
        title: "Profile has been successfully updated. Please login again.",
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
      localStorage.removeItem("profileUpdated"); // Remove the flag
    }
  }, []);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword === "") {
      setPasswordVisible(false);
    }
  };
  const handleUserName = (event) => {
    const newUserName = event.target.value;
    setEmail(newUserName);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/globalcontroller/login",
        {
          email,
          password,
        }
      );

      if (response.data && response.data.jwt) {
        const token = response.data.jwt;
        localStorage.setItem("token", token);
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;

        if (userRole === "ADMIN") {
          window.location.href = "/adminpanel";
        } else {
          window.location.href = "/";
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Credentials Invalid !! \nPlease try again",
          text: "Please check the entered details and try again",
          width: "500px",
          heightAuto: false,
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
      if (error.response && error.response.status === 401) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed. Please try again.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Credentials Invalid !! \nPlease try again",
          text: "Please check the entered details and try again",
          width: "500px",
          heightAuto: false,
          customClass: {
            container: "custom-swal-container",
            popup: "custom-swal-popup",
            title: "custom-swal-title",
            content: "custom-swal-content",
            footer: "custom-swal-footer",
            confirmButton: "custom-swal-confirm-button",
          },
        });
      }
    }
  };

  const isLoginDisabled = email === "" || password === "";

  return (
    <>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#292827",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CirclesWithBar
            height="250"
            width="200"
            color=" var(--emphasis-text)"
            outerCircleColor="var( --theme-color)"
            innerCircleColor="var(--emphasis-text)"
            barColor="var(--text-color)"
            ariaLabel="circles-with-bar-loading"
            visible={true}
          />
        </div>
      ) : (
        <section className="login-wrapper">
          <div className="form-login-wrapper">
            <form onSubmit={handleLogin}>
              <h1>Welcome Back User!</h1>

              <div className="login-input-box">
                <input
                  type="text"
                  value={email}
                  onChange={handleUserName}
                  placeholder="Enter Your Email"
                  required
                />
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="login-input-box">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ textTransform: "none" }}
                />
                <i
                  className={`fa-solid fa-eye${
                    passwordVisible ? "-slash" : ""
                  }`}
                  onClick={togglePasswordVisibility}
                ></i>
              </div>
              <div className="remember-forgot">
                <Link to="/forgetemail">Forgot password ?</Link>
              </div>
              <div className="login-submit-btn">
                <button
                  type="submit"
                  className="btn"
                  disabled={isLoginDisabled}
                  style={{
                    cursor: isLoginDisabled ? "not-allowed" : "pointer",
                    color: isLoginDisabled
                      ? "rgba(255, 255, 255, 0.623)"
                      : "var(--text-color)",
                  }}
                >
                  Login
                </button>
              </div>

              <div className="register_link">
                <p>
                  Don't have an account? <Link to="/register"> Register</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Loginform;
