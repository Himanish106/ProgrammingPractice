import React from "react";
import feedbackImg from "../../Images/business-people-having-a-meeting-in-the-board-room.jpg";
const AboutUsIntro = () => {
  return (
    <section className="contact" id="feedback" style={{paddingTop: "10rem"}}>
      <div className="row">
        <div className="content">
          <h3>
            Our <span className="col">Story</span>
          </h3>
          <p>
          Event Vista's story began with a dream: to craft exceptional experiences that linger in the memory long after the lights dim. Since time in memorial, we've woven tales of joy, laughter, and celebration through our meticulously planned events. From intimate affairs to extravagant galas, each event reflects our passion for perfection and dedication to exceeding expectations. Join us on this extraordinary journey as we continue to create magical moments that leave a lasting impression.
          </p>
          <a href="#" className="btn">
            Join Us
          </a>
        </div>
        <div className="image">
          <img src={feedbackImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default AboutUsIntro;
