import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/Feedback.css";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
const FeedbackPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loggedInEmail,setLoggedInEmail] = useState("")
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setLoggedInEmail(decodedToken.email)
    }
  
    return () => clearTimeout(timer);
  }, []);
  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };
  const handleName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };
  const handleFeedback = (event) => {
    const newFeedback = event.target.value;
    setFeedback(newFeedback);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== loggedInEmail) {
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
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/feedback", {
        name,
        email,
        feedback,
      });
      console.log(response.data); 
      setName("");
      setEmail("");
      setFeedback("");
      Swal.fire({
        icon: "success",
        title: "Feedback submitted successfully!",
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
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
        <section className="feedback-main-container">
          <div className="feedback-section">
            <h1 className="feedback-caption">
              <span className="col">Share Your Thoughts </span> : Help Us Shape
              a Better Experience
            </h1>
            <div className="feedback-container">
              <form action="" className="feedback-form" onSubmit={handleSubmit}>
                <h1>Give Your Feedback</h1>
                <div className="id">
                  <input
                    type="text"
                    name=""
                    id=""
                    value={name}
                    onChange={handleName}
                    placeholder="Enter Your Name"
                    className="feedback-username"
                  />
                  <i className="far fa-user"></i>
                </div>
                <div className="id">
                  <input
                    type="email"
                    name=""
                    id=""
                    value={email}
                    onChange={handleEmail}
                    placeholder="Enter Your Email"
                    className="feedback-email"
                  />
                  <i className="far fa-envelope"></i>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="5"
                  value={feedback}
                  onChange={handleFeedback}
                  placeholder="Enter Your Opinions Here"
                  className="feedback-textarea"
                ></textarea>
                <button type="submit" className="btn">
                  Send Feedback
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default FeedbackPage;
