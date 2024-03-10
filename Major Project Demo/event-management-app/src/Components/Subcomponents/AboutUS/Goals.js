import React from "react";
import futureImg from "../../Images/Goals.gif"
const Goals = () => {
  return (
    <section className="contact" id="feedback">
      <div className="row">
        <div className="content">
          <h3>
            Our <span className="col">Vision</span> for the
            <span className="col"> Future</span>
          </h3>
          <p>
            Our future goals and plans revolve around continually innovating and
            expanding our services to better cater to our clients' evolving
            needs. We aim to establish ourselves as industry leaders by
            consistently delivering exceptional experiences and fostering
            long-lasting partnerships. Our focus remains on staying ahead of
            trends, embracing technology, and nurturing our talented team to
            ensure sustained growth and success.
          </p>
        </div>
        <div className="image">
          <img src={futureImg} alt="contact us" />
        </div>
      </div>
    </section>
  );
};
export default Goals;