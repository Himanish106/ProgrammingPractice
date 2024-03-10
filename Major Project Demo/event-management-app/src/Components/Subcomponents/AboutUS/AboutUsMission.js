import React from "react";
import missionImg from "../../Images/Mission Vision.gif";
const Mission = () => {
  return (
    <section className="contact" id="feedback">
      <div className="row">
        <div className="content">
          <h3>
          Crafting Tomorrow: Our <span className="col">Vision</span> & <span className="col">Mission</span> 
          </h3>
          <p>
            At Event Vista, we aim to craft unforgettable experiences,
            exceeding expectations, and leaving lasting impressions. We're
            committed to flawless event execution, reflecting our clients'
            visions and values. Our vision is industry leadership, driven by
            excellence, creativity, and client delight. We strive for
            innovation, fostering joy, connections, and cherished memories.
          </p>
          <a href="#" className="btn">
            reach us
          </a>
        </div>
        <div className="image">
          <img src={missionImg} alt="contact us" />
        </div>
      </div>
    </section>
  );
};
export default Mission;
