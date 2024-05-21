import React from "react";
import "../Global Files/global.css";
import "./CSS/Footer.css";
const Footer = () => {
  return (
<section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>Branches</h3>
      <a href="#"><i className="fas fa-map-marker-alt" />Kolkata</a>
      <a href="#"><i className="fas fa-map-marker-alt" />Hyderabad</a>
      <a href="#"><i className="fas fa-map-marker-alt" />Delhi</a>
      <a href="#"><i className="fas fa-map-marker-alt" />Bangalore</a>
      <a href="#"><i className="fas fa-map-marker-alt" />Chennai</a>
    </div>
    <div className="box">
      <h3>quick links</h3>
      <a href="#home"><i className="fas fa-arrow-right" /> home</a>
      <a href="#service"><i className="fas fa-arrow-right" /> service</a>
      <a href="#about"><i className="fas fa-arrow-right" /> about</a>
      <a href="#gallery"><i className="fas fa-arrow-right" /> gallery</a>
      <a href="#price"><i className="fas fa-arrow-right" /> price</a>
      <a href="#review"><i className="fas fa-arrow-right" /> review</a>
      <a href="#contact"><i className="fas fa-arrow-right" /> contact</a>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <a href="#"><i className="fas fa-phone" />+123-456-7890</a>
      <a href="#"><i className="fas fa-phone" />+098-765-4312</a>
      <a href="#" className="small"><i className="fas fa-envelope" />eventvista83@gmail.com</a>
      <a href="#">
        <i className="fas fa-map-marker-alt">&nbsp; Kolkata, India - 700057</i>
      </a>
    </div>
    <div className="box">
      <h3>Follow us</h3>
      <a href="#"><i className="fab fa-facebook-f" />Facebook</a>
      <a href="#"><i className="fab fa-twitter" />Twitter</a>
      <a href="#"><i className="fab fa-instagram" />Instagram</a>
      <a href="#"><i className="fab fa-linkedin-in" />LinkedIn</a>
    </div>
  </div>
  <div className="credit">
    <span className="col">&#169; Event</span> Vista | all rights reserved
  </div>
</section>

  );
};
export default Footer;
