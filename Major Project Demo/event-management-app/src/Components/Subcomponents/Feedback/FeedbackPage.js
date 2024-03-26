import React from "react";
import "../../CSS/Feedback.css";
const FeedbackPage = () => {
  return (
    <section className="feedback-main-container">
      <div className="feedback-section">
      <h1 className="feedback-caption">
         <span className="col">Share Your Thoughts </span> : Help Us Shape a Better Experience
      </h1>
        <div className="feedback-container">
          <form action="" className="feedback-form">
            <h1>Give Your Feedback</h1>
            <div className="id">
              <input type="text" name="" id="" placeholder="Enter Your Name" className="feedback-username" />
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
            <button type="submit" className="btn">Send Feedback</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default FeedbackPage;
