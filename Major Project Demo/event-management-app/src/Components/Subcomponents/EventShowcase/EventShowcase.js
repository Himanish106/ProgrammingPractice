import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/EventShowcase.css";
import "../../CSS/PrivateEventBooking.css";
import { Link } from "react-router-dom";
import axios from "axios";

const EventShowcase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [publicOrders, setPublicOrders] = useState([]);
  const [states, setStates] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/privateeventcontroller/publicstates")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const fetchPublicOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/privateeventcontroller/allorder"
      );
      const ordersWithData = response.data.filter((order) => order.data);
      setPublicOrders(ordersWithData);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching public orders:", error);
    }
  };

  useEffect(() => {
    fetchPublicOrders();
  }, []);

  const formatDate = (dateString) => {
    const dateParts = dateString.split(" ")[0].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month - 1, day); // Months are 0-indexed in JavaScript
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const filteredOrders = selectedState
  ? publicOrders.filter((order) => order.state === selectedState)
  : publicOrders;

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
            <select
              id="state"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select State to view events</option>
              {states.map((state) => (
                <option key={state.stateId} value={state.stateName}>
                  {state.stateName}
                </option>
              ))}
            </select>
          </div>
          <div className="event-advertising-box">
            {filteredOrders.map((publicOrder) => (
              <div className="items" key={publicOrder.id}>
                <div className="item-details">
                  <div className="overlay-box">
                    <img
                      src={`data:image/jpeg;base64,${publicOrder.data}`}
                      alt="event-image"
                    />
                    <div className="pdt-content">
                      <h3>Book Your Events Now</h3>
                      <Link
                        to={`/ticketbooking/${publicOrder.id}`}
                        className="btn book-btn"
                      >
                        Book Tickets Now
                      </Link>
                    </div>
                  </div>
                  <h1 className="event-head">{publicOrder.eventType}</h1>
                  <div className="event-details">
                    <h3 className="event-location-head">
                      Location : &nbsp;
                      <span className="loc-color" style={{ fontWeight: 500 }}>
                        {publicOrder.state},{publicOrder.city}
                      </span>
                    </h3>
                    <h3 className="event-location-head">
                      Venue : &nbsp;
                      <span className="loc-color" style={{ fontWeight: 500 }}>
                      {publicOrder.venueName}
                      </span>
                    </h3>
                    <p className="event-date">
                      Date : &nbsp;
                      <span className="loc-color">
                        {publicOrder.eventDate
                          ? formatDate(publicOrder.eventDate)
                          : "Date not available"}
                      </span>
                    </p>
                    <p className="event-rate">
                      Ticket Rates : &nbsp;
                      <span className="loc-color">
                        &#8377; {publicOrder.ticketPrice}/person
                      </span>
                    </p>
                  </div>
                  <Link
                    to={`/ticketbooking/${publicOrder.id}`}
                    className="btn book-btn"
                  >
                    Book Tickets Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default EventShowcase;
