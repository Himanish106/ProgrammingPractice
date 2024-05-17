import React, { useState } from "react";
import "../../CSS/Register.css";
import axios from "axios";
import Swal from "sweetalert2";
const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [contactLength, setContactLength] = useState(true);
  const [containsNumberFirst, setContainsNumberFirst] = useState(false);
  const [containsNumberLast, setContainsNumberLast] = useState(false);
  const [containsSpecialCharFirst, setContainsSpecialCharFirst] =
    useState(false);
  const [containsSpecialCharLast, setContainsSpecialCharLast] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValidLength, setIsPasswordValidLength] = useState(false);
  const [isPasswordContainsNumber, setIsPasswordContainsNumber] =
    useState(false);
  const [isPasswordContainsSpecialChar, setIsPasswordContainsSpecialChar] =
    useState(false);
  const [isPasswordContainsLowerCase, setIsPasswordContainsLowerCase] =
    useState(false);
  const [isPasswordContainsUpperCase, setIsPasswordContainsUpperCase] =
    useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const handleFirstNameChange = (event) => {
    const nameFirst = event.target.value;
    setFirstName(nameFirst);
    setContainsNumberFirst(/\d/.test(nameFirst));
    setContainsSpecialCharFirst(/[!@#$[\]%^&*(),.?":{}|<>]/.test(nameFirst));
  };
  const handleLastNameChange = (event) => {
    const nameLast = event.target.value;
    setLastName(nameLast);
    setContainsNumberLast(/\d/.test(nameLast));
    setContainsSpecialCharLast(/[!@#$[\]%^&*(),.?":{}|<>]/.test(nameLast));
  };
  const handleEmailChange = (event) => {
    const userEmail = event.target.value;
    setEmail(userEmail);
    if (userEmail === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(
        /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(userEmail)
      );
    }
  };
  const handleContactChange = (event) => {
    const contact = event.target.value;
    const userContactLength = contact.length;
    setContact(contact);
    if (userContactLength > 10) {
      setContactLength(false);
    } else {
      setContactLength(true);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const passwordLength = newPassword.length;
    if (passwordLength >= 8 && passwordLength <= 11) {
      setPasswordStrength("weak");
    } else if (passwordLength > 11 && passwordLength < 16) {
      setPasswordStrength("average");
    } else if (passwordLength >= 16) {
      setPasswordStrength("strong");
    }
    setIsPasswordValidLength(newPassword.length >= 8);
    setIsPasswordContainsNumber(/\d/.test(newPassword));
    setIsPasswordContainsSpecialChar(
      /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
    );
    setIsPasswordContainsLowerCase(/[a-z]/.test(newPassword));
    setIsPasswordContainsUpperCase(/[A-Z]/.test(newPassword));
    if (newPassword === "") {
      setPasswordVisible(false);
    }
  };
  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/globalcontroller/register",
        {
          firstName,
          lastName,
          email,
          password,
          contact,
        }
      );

      const token = response.data.token;
      localStorage.setItem("token", token);
      Swal.fire({
        icon: "success",
        title: "You have been successfully registered",
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
          window.location.href = "/";
        }
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "You are already registered !! \nPlease Login",
          text: "Please Login or try with a different email",
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
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed !! \nPlease try again",
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
    }
  };
  const isRegisterDisabled =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    contact === "" ||
    contactLength === false ||
    containsNumberFirst ||
    containsNumberLast ||
    containsSpecialCharFirst ||
    !isEmailValid ||
    containsSpecialCharLast ||
    !isPasswordValidLength ||
    !isPasswordContainsNumber ||
    !isPasswordContainsSpecialChar ||
    !isPasswordContainsLowerCase ||
    !isPasswordContainsUpperCase ||
    passwordStrength == "weak";
  return (
    <section className="register-section">
      <div className="register-box">
        <div className="register-fields">
          <div className="login-logo">
            Event <span className="col">Vista</span>
          </div>
          <form className="register-form" onSubmit={handleRegistration}>
            <div className="field">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {containsNumberFirst && !containsSpecialCharFirst && (
                <p className="name-error">Name should not contain a number</p>
              )}
              {containsSpecialCharFirst && !containsNumberFirst && (
                <p className="name-error">
                  Name should not contain a special character
                </p>
              )}
              {containsNumberFirst && containsSpecialCharFirst && (
                <p className="name-error">
                  Name should not contain any number or special character
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {containsNumberLast && !containsSpecialCharLast && (
                <p className="name-error">Name should not contain a number</p>
              )}
              {containsSpecialCharLast && !containsNumberLast && (
                <p className="name-error">
                  Name should not contain a special character
                </p>
              )}
              {containsNumberLast && containsSpecialCharLast && (
                <p className="name-error">
                  Name should not contain any number or special character
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange}
                style={{ textTransform: "none" }}
              />
              {email !== "" && !isEmailValid && (
                <p className="name-error">Email is not valid</p>
              )}
            </div>
            <div className="field">
              <label htmlFor="contact">Contact No</label>
              <input
                type="number"
                placeholder="Enter Your Contact Number"
                value={contact}
                onChange={handleContactChange}
                style={{ textTransform: "none" }}
              />
              {contactLength === false && (
                <p className="name-error">
                  Number should not be greater than 10
                </p>
              )}
            </div>

            <div className="field password-field">
              <label htmlFor="Password">Password</label>
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
            {password.length > 7 && (
              <p
                className={
                  passwordStrength === "weak"
                    ? "weak-password"
                    : passwordStrength === "average"
                    ? "average-password"
                    : passwordStrength === "strong"
                    ? "strong-password"
                    : ""
                }
              >
                Password Strength: <strong>{passwordStrength}</strong>
              </p>
            )}
            {password !== "" && !isPasswordValidLength && (
              <p className="name-error">
                Password should be at least 8 characters long
              </p>
            )}
            {password !== "" && !isPasswordContainsNumber && (
              <p className="name-error">
                Password should contain at least 1 number
              </p>
            )}
            {password !== "" && !isPasswordContainsSpecialChar && (
              <p className="name-error">
                Password should contain at least 1 special character
              </p>
            )}
            {password !== "" && !isPasswordContainsLowerCase && (
              <p className="name-error">
                Password should contain at least 1 lowercase character
              </p>
            )}
            {password !== "" && !isPasswordContainsUpperCase && (
              <p className="name-error">
                Password should contain at least 1 uppercase character
              </p>
            )}
            <div className="register-btn">
              <button
                className="btn"
                disabled={isRegisterDisabled}
                style={{
                  cursor: isRegisterDisabled ? "not-allowed" : "pointer",
                }}
              >
                Register
              </button>
              <p>
                Already a member? &nbsp;
                <span className="col">
                  <a href="/login" className="col login-btn">
                    Login
                  </a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
