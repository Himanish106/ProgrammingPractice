import React, { useState } from "react";
import "../../CSS/EventShowcase.css";
import eventimg from "../../Images/gallery1.jpg";
import venueData from "../../../Global Files/statesandlocations.json";
import "../../CSS/PrivateEventBooking.css";
const EventShowcase = () => {
    const [selectedState, setSelectedState] = useState("");
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
      };
  return (
    <section className="event-advertising">
      <h1 className="event-advertising-heading">
        Live &nbsp;
        <span className="col" style={{ textTransform: "uppercase" }}>
          Events &nbsp;
        </span>
        Spotlight 
      </h1>
      <div className="selected-state facilities">
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
              >
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
  );
};
export default EventShowcase;
