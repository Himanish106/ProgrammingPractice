import React from "react";
import contactImg from "../../Images/contact-us.gif";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="row">
        <div className="image">
          <img src={contactImg} alt="contact us" />
        </div>
        <div className="content">
          <h3>We are here for you <span className="col">24x7</span></h3>
          <p>
            <span className="bold">Get in Touch: &nbsp;</span> Have questions, inquiries, or ready to plan your next
            event? We're here to help! Our dedicated team is just a message
            away. Drop us a line, and let's start bringing your vision to life.
          </p>
          <p>
            <span className="bold">Let's Collaborate: &nbsp;</span> Ready to make your event dreams a reality? Our experienced team is eager to collaborate with you on private celebrations or public gatherings. Reach out today, and let's create unforgettable moments together.
          </p>
          <a href="#" className="btn">
            reach us
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
