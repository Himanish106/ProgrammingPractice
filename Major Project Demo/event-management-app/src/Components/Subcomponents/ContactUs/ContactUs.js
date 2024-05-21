import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/ContactUs.css";
import "../../../Global Files/global.css";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const ContactUs = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [firstName, setFirstName ] = useState("");
  const [lastName, setLastName ] = useState("");
  const [email, setEmail ] = useState("");
  const [contact, setContact] = useState("")
  const [wordCount, setWordCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedInEmail,setLoggedInEmail] = useState("")
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setLoggedInEmail(decodedToken.email)
    }
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
  }

  const handleFirstName = (event) => {
    const newFirstName = event.target.value;
    setFirstName(newFirstName);
  };

  const handleLastName = (event) => {
    const newLastName = event.target.value;
    setLastName(newLastName);
  };

  const handleEmail = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleContact = (event) => {
    const newContact = event.target.value;
    setContact(newContact);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== loggedInEmail) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email!",
        text: "Please enter your registered email.",
        confirmButtonText: "OK",
        width: "500px",
        customClass: {
          container: "custom-swal-container",
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
          footer: "custom-swal-footer",
          confirmButton: "custom-swal-confirm-button",
        },
      });
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user/contact", {
        firstName,
        lastName,
        email,
        contact,
        message: inputMessage,
      });
      console.log(response.data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setContact("");
      setInputMessage("");
      Swal.fire({
        icon: "success",
        title: "Your request has been submitted successfully.!",
        text:"We will contact you soon.",
        confirmButtonText: "OK",
        width: "500px",
        customClass: {
          container: "custom-swal-container",
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          text: "custom-swal-content",
          footer: "custom-swal-footer",
          confirmButton: "custom-swal-confirm-button",
        },
      });
    } catch (error) {
      console.error("Error:", error);
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
                  <strong>Email: &nbsp;</strong>eventvista83@gmail.com
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
              <form onSubmit={handleSubmit}>
                <div className="inputBox">
                  <input type="text"  placeholder="First Name" value={firstName} onChange={handleFirstName} />
                  <input type="text"  placeholder="Last Name" value={lastName} onChange={handleLastName} />
                </div>
                <div className="inputBox2">
                  <input type="email"  placeholder="Email" value={email} onChange={handleEmail} />
                </div>
                <div className="inputBox2">
                  <input type="number"  placeholder="Contact" value={contact} onChange={handleContact} />
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
                <input type="submit" value="Send Message" className="btn" />
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ContactUs;
