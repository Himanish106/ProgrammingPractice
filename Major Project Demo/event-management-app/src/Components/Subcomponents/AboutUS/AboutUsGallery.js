import React from "react";
import gal1 from "../../Images/gallery1.jpg";
import gal2 from "../../Images/gallery2.jpg";
import gal3 from "../../Images/gallery3.jpg";
import gal4 from "../../Images/gallery4.jpg";
import gal5 from "../../Images/gallery5.jpg";
import gal6 from "../../Images/gallery6.jpg";
import gal7 from "../../Images/gallery7.jpg";
import gal8 from "../../Images/gallery8.jpg";
import gal9 from "../../Images/gallery9.jpg";
const AboutUsGallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading" style={{paddingBottom:"1rem"}}>
      Visual <span className="col">Chronicles:</span> Explore Our <span className="col">Gallery</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src={gal1} />
        </div>
        <div className="box">
          <img src={gal2} />
        </div>
        <div className="box">
          <img src={gal3} />
        </div>
        <div className="box">
          <img src={gal4} />
        </div>
        <div className="box">
          <img src={gal5} />
        </div>
        <div className="box">
          <img src={gal6} />
        </div>
        <div className="box">
          <img src={gal7} />
        </div>
        <div className="box">
          <img src={gal8} />
        </div>
        <div className="box">
          <img src={gal9} />
        </div>
      </div>
    </section>
  );
};
export default AboutUsGallery;
