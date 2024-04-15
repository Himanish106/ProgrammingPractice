import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/ContactUs.css";
import "../../../Global Files/global.css";
const ContactUs = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  const handleMessageChange = (event) => {
    const inputMessage = event.target.value;
    const inputWordCount = inputMessage.trim().match(/\S+/g)?.length || 0;
    if (inputWordCount <= 1000) {
      setInputMessage(inputMessage);
      setWordCount(inputWordCount);
    } else {
      alert("Word limit should not be greater than 1000");
    }
  };
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
    <section className="my-contact" id="myContact">
      <h1 className="heading">
        <span className="col">contact</span> us
      </h1>
      <div className="contact-info">
        <div className="contact-details">
          <div className="company-details">
            <i className="far fa-envelope fa-solid fa-3x" />
            <p>
              <strong>Email: &nbsp;</strong>eventvista22@gmail.com
            </p>
          </div>
          <div className="company-details">
            <i className="fa-sharp fa-solid fa-square-phone fa-3x" />
            <p>
              <strong>Phone: &nbsp;</strong>+919073889463
            </p>
          </div>
          <div className="company-details">
            <i className="fas fa-map-marker-alt fa-3x" />
            <p className="address">
              <strong>Address: &nbsp;</strong> 23/1 Royd Street, Kolkata, India
            </p>
          </div>
          <div className="company-details">
            <i className="fas fa-brands fa-facebook fa-3x" />
            <p className="para-padding font">
              <strong>Facebook: &nbsp;</strong>{" "}
              https://www.facebook.com/Event-Vista-105432731235789/
            </p>
          </div>
          <div className="company-details">
            <i className="fas fa-brands fa-linkedin fa-3x" />
            <p className="para-padding font">
              <strong>LinkedIn: &nbsp;</strong>{" "}
              https://www.linkedin.com/company/event-vista-page
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1nGyJk7s-53iF5JAnhkyo-nwspJlXqhw&ehbc=2E312F&noprof=1"
            height={250}
          />
        </div>
        <div className="contact-form">
          <p className="contact-intro">
            Whether you’re planning a wedding, corporate event, or special
            celebration, we’re here to bring your vision to life. Contact us
            today to discuss your event needs and let us craft an unforgettable
            experience for you.
          </p>
          <form>
            <div className="inputBox">
              <input type="text"  placeholder="First Name" />
              <input type="email"  placeholder="Last Name" />
            </div>
            <div className="inputBox2">
              <input type="email"  placeholder="Email" />
            </div>
            <div className="inputBox2">
              <input type="number"  placeholder="Contact" />
            </div>
            <div style={{ position: "relative" }}>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                value={inputMessage}
                onChange={handleMessageChange}
              />
              <span className="word-count">{`${wordCount}/1000 words`}</span>
            </div>
            <input type="submit" value="send message" className="btn" />
          </form>
        </div>
      </div>
    </section>
    )}
    </>
  );
};
export default ContactUs;
