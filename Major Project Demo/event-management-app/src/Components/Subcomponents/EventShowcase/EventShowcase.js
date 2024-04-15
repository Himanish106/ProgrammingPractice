import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/EventShowcase.css";
import eventimg from "../../Images/gallery1.jpg";
import venueData from "../../../Global Files/statesandlocations.json";
import "../../CSS/PrivateEventBooking.css";
import { Link } from "react-router-dom";
const EventShowcase = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  const [selectedState, setSelectedState] = useState("");
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
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
    <section className="event-advertising">
      <h1 className="event-advertising-heading">
        Live &nbsp;
        <span className="col" style={{ textTransform: "uppercase" }}>
          Events &nbsp;
        </span>
        Spotlight
      </h1>
      <div className="selected-state facilities">
        <select id="state" value={selectedState} onChange={handleStateChange}>
          <option value="">Select State to view events</option>
          {Object.keys(venueData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="event-advertising-box">
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <Link to="/ticketbooking" className="btn">
                  Book
                </Link>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <Link to="/ticketbooking" className="btn book-btn">
              Book Tickets Now
            </Link>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
        <div className="items">
          <div className="item-details">
            <div className="overlay-box">
              <img src={eventimg} alt="event-image" />
              <div className="pdt-content">
                <h3>Book Your Events Now</h3>
                <button className="btn">Book</button>
              </div>
            </div>
            <h1 className="event-head">Summer Concert Series</h1>
            <div className="event-details">
              <h3 className="event-location-head">
                Location : &nbsp;
                <span className="loc-color" style={{ fontWeight: 500 }}>
                  Emerald Gardens
                </span>
              </h3>
              <p className="event-date">
                Date : &nbsp;
                <span className="loc-color">11/05/24</span>
              </p>
              <p className="event-rate">
                Ticket Rates : &nbsp;
                <span className="loc-color">&#8377; 900/person</span>
              </p>
            </div>
            <button className="btn">Book Tickets Now</button>
          </div>
        </div>
      </div>
    </section>
     )}
    </>
  );
};
export default EventShowcase;
