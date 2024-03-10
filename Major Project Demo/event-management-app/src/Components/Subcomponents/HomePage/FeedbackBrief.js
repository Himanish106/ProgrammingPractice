import React from "react";
import  feedbackImg from "../../Images/Feedback.gif"
const FeedBack = () => {
  return (
<section className="contact" id="feedback">
  <div className="row">
    <div className="content">
      <h3>Your <span className="col">Opinion</span> Matters!</h3>
      <p>
        In our vibrant community, we cherish the insights and thoughts of
        each individual. Your feedback shapes our journey, guiding us
        towards excellence. Share your thoughts, ideas, and experiences with
        us, as together, we create a space where every voice is valued and
        heard. Join us on this exciting journey of growth and collaboration!
      </p>
      <a href="#" className="btn">
        FeedBack Please!
      </a>
    </div>
    <div className="image">
      <img src={feedbackImg} alt="" />
    </div>
  </div>
</section>

  );
};
export default FeedBack;
