import React, { useState } from "react";
import ticketimg from "../../Images/gallery2.jpg";
import "../../CSS/Ticketing.css";
const Ticketing = () => {
  const termsAndConditions = [
    "Tickets are valid only for the specified date, time, and event",
    " No exchanges or refunds will be provided for expired or unused tickets.",
    "All attendees must carry valid government-issued photo identification.",
    "Failure to present identification may result in denied entry without refund.",
    "Management reserves the right to refuse entry to any individual",
    "All bags and personal belongings are subject to inspection upon entry.",
    "Prohibited items will not be permitted inside the venue.",
    "Re-entry to the event venue may not be permitted once attendees have exited.",
    "No tolerance for disruptive behavior; consequences apply.",
    "Attendees are responsible for their own health and safety during the event.",
    "Recording prohibited at certain event times.",
    " Refund or reschedule for canceled events.",
    " Reselling or transferring tickets for profit is strictly prohibited",
  ];
  const [ticketCount, setTicketCount] = useState(0);
  const pricePerPerson = 800;
  const handleAddTicket = () => {
    if (ticketCount < 5) {
      setTicketCount(ticketCount + 1);
    }
  };

  const handleRemoveTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };
  return (
    <section className="ticketing-section">
      <div className="ticket-boxing">
        <div className="img-section">
          <img src={ticketimg} alt="selected-event-img" />
        </div>
        <div className="ticket-flex">
          <div className="ticket-body-section">
            <div className="event-info">
              <h1>Summer Concert Series</h1>
              <p style={{ paddingBottom: "1rem" }}>
                Book Your Tickets Today!
              </p>
            </div>
            <div className="ticket-main-info">
              <p className="location-event">
                <i className="fas fa-map-marker-alt fa-3x" />
                Emerald Gardens, Maharashtra
              </p>
              <p className="event-date">
                <i className="fa-solid fa-calendar-days" />
                11/05/24
              </p>
              <p className="ticket-price">Ticket Price : &#8377; 800/person</p>
              <div className="slot-book">
                <form className="ticket-form">
                  <a
                    className="remove-button"
                    id="removeButton"
                    onClick={handleRemoveTicket}
                  >
                    <i class="fa-solid fa-square-minus"></i>
                  </a>
                  <span id="people" className="people-no">
                    {ticketCount}
                  </span>
                  <input
                    type="hidden"
                    id="pageNoInput"
                    name="pageNo"
                    value={ticketCount}
                  />
                  <a
                    className="add-button"
                    id="addButton"
                    onClick={handleAddTicket}
                  >
                    <i class="fa-solid fa-square-plus" />
                  </a>
                  <span className="ticket-condition">
                    (One person can book upto 5 tickets.)
                  </span>
                  <button
                    type="submit"
                    className="btn"
                    disabled={ticketCount === 0}
                    style={{
                      cursor: ticketCount === 0 ? "not-allowed" : "pointer",
                    }}
                  >
                    Pay ₹{ticketCount * pricePerPerson}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="side-info">
            <div className="note" style={{ paddingBottom: "1rem" }}>
              <h1>NOTE</h1>
              <p>
                Please note that tickets are non-refundable and non-transferable
              </p>
            </div>
            <div className="about">
              <h1>ABOUT</h1>
              <p>
                Book your tickets today exclusively from event vista. Please do
                not forget to bring your tickets on the day of event. Piracy of
                tickets is strictly prohibited and unlawful. Any individual
                found engaging in such activities will face legal consequences
                and penalties. Seats are limited. Please book your slots fast.
              </p>
            </div>
            <div className="terms">
              <select id="terms">
                <option value="" disabled selected>
                  Terms and Conditions
                </option>
                {termsAndConditions.map((term, index) => (
                  <option key={index} disabled>
                    &#8226;{term}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ticketing;
