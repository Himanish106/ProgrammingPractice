import React, { useState } from "react";
import "../../CSS/Login.css";
import { Link } from "react-router-dom";
const Loginform = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
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
    setUserName(newUserName);
  };
  const isLoginDisabled = userName === "" || password === "";

  return (
    <section className="login-wrapper">
      <div className="form-login-wrapper">
        <form action="">
          <h1>Welcome Back User!</h1>

          <div className="login-input-box">
            <input
              type="text"
              value={userName}
              onChange={handleUserName}
              placeholder="Enter Your Email"
              required
            />
            <i class="fa-solid fa-envelope"></i>
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
              className={`fa-solid fa-eye${passwordVisible ? "-slash" : ""}`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
          <div className="remember-forgot">
            <Link to="/forgetotp">Forgot password ?</Link>
          </div>
          <div className="login-submit-btn">
            <button
              type="submit"
              className="btn"
              disabled={isLoginDisabled}
              style={{
                cursor: isLoginDisabled ? "not-allowed" : "pointer",
                color: isLoginDisabled ? "rgba(255, 255, 255, 0.623)" : "var(--text-color)",
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
  );
};

export default Loginform;
