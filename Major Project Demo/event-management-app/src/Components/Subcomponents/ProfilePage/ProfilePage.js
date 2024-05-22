import React, { useState, useEffect } from "react";
import "../../CSS/Register.css";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [contact, setContact] = useState("");
  const [contactLength, setContactLength] = useState(true);
  const [containsNumberFirst, setContainsNumberFirst] = useState(false);
  const [containsNumberLast, setContainsNumberLast] = useState(false);
  const [containsSpecialCharFirst, setContainsSpecialCharFirst] = useState(false);
  const [containsSpecialCharLast, setContainsSpecialCharLast] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setFirstName(decodedToken.firstName);
      setLastName(decodedToken.lastName);
      setEmail(decodedToken.email);
      setContact(decodedToken.contact);
    }
  }, []);

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
    setIsEmailValid(
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(userEmail)
    );
  };

  const handleContactChange = (event) => {
    const contact = event.target.value;
    setContact(contact);
    setContactLength(contact.length <= 10);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const decodedToken = jwtDecode(token);
      const userEmail = decodedToken.email; // Assuming the token contains the user ID

      const response = await axios.put(
        `http://localhost:8080/globalcontroller/users/${userEmail}`,
        {
          firstName,
          lastName,
          contact,
        },
      );

      Swal.fire({
        icon: "success",
        title: "Profile updated successfully",
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
            localStorage.setItem("profileUpdated", "true");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed !! \nPlease try again",
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
  };

  const isUpdateDisabled =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    contact === "" ||
    !isEmailValid ||
    contactLength === false ||
    containsNumberFirst ||
    containsNumberLast ||
    containsSpecialCharFirst ||
    containsSpecialCharLast;

  return (
    <section className="register-section">
      <div className="register-box">
        <div className="register-fields">
          <div className="login-logo">
           Profile <span className="col">Page</span>
          </div>
          <form className="register-form" onSubmit={handleUpdate}>
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
                readOnly
              />
              {email !== "" && !isEmailValid &&  (
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
            <div className="register-btn">
              <button
                className="btn"
                disabled={isUpdateDisabled}
                style={{
                  cursor: isUpdateDisabled ? "not-allowed" : "pointer",
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
