import React from "react";
import "../Global Files/global.css";
import "./CSS/ContactBrief.css";
import "./CSS/FeedbackBrief.css";
import  feedbackImg from "./Images/Feedback.gif"
const FeedBack = () => {
  return (
    <section class="contact" id="feedback">
      <div class="row">
        <div class="content">
          <h3>Your <span className="col">Opinion</span> Matters!</h3>
          <p>
            In our vibrant community, we cherish the insights and thoughts of
            each individual. Your feedback shapes our journey, guiding us
            towards excellence. Share your thoughts, ideas, and experiences with
            us, as together, we create a space where every voice is valued and
            heard. Join us on this exciting journey of growth and collaboration!
          </p>
          <a href="#" class="btn">
            FeedBack Please!
          </a>
        </div>
        <div class="image">
          <img src={feedbackImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default FeedBack;
