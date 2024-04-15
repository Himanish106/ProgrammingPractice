import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/Feedback.css";
const FeedbackPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
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
              <form action="" className="feedback-form">
                <h1>Give Your Feedback</h1>
                <div className="id">
                  <input
                    type="text"
                    name=""
                    id=""
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
