import React from "react";
import "../../CSS/ServiceBrief.css";
import "../../CSS/EventSelection.css";
const EventSelection = () => {
  return (
    <section className="pricing event-selection">
      <h1 className="event-selection-heading">
        Want to book an event today? 
      </h1>
      <h1 className="event-selection-heading-emphasis"><span className="col">Select Now!</span></h1>
      <div className="events select-event">
        <div className="private-event event-private">
          <h3 className="title">Private Events</h3>
          <h3 className="amount">
            Starting from <span className="col">$500</span>
          </h3>
          <a href="#" className="btn">
            check out
          </a>
        </div>
        <div className="public-event event-public">
          <h3 className="title">Public Events</h3>
          <h3 className="amount">
            Starting from <span className="col">$800</span>
          </h3>
          <a href="#" className="btn">
            check out
          </a>
        </div>
      </div>
    </section>
  );
};
export default EventSelection;
