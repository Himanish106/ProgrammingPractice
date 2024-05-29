import React, { useEffect, useState } from "react";
import "../../CSS/Ticketing.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const Ticketing = () => {
  const { eventId } = useParams();
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
  const [eventDetails, setEventDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [date, setEventDate] = useState("");
  const [state, setEventState] = useState("");
  const [venueName, setVenueName] = useState("");
  const [cost, setTotalCost] = useState(0);

  const submitForm = async () => {
    const formData = {
      eventName:eventDetails.eventType,
      email: userEmail,
      venue: venueName,
      state: state,
      date: date,
      noOfPersons: ticketCount,
      paidPrice: cost,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/ticketing/postinfo",
        formData
      );
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (eventDetails) {
      const totalPrice = ticketCount * eventDetails.ticketPrice;
      setTotalCost(totalPrice);
    }
  }, [ticketCount, eventDetails]);

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

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/privateeventcontroller/order/${eventId}`
        );
        console.log(response.data);
        setEventDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setIsLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserEmail(decodedToken.email);
      setFirstName(decodedToken.firstName);
    }
  }, []);

  useEffect(() => {
    if (eventDetails) {
      setEventDate(formatDate(eventDetails.eventDate));
      setEventState(eventDetails.state);
      setVenueName(eventDetails.venueName);
    }
  }, [eventDetails]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const dateParts = dateString.split(" ")[0].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month - 1, day);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      const options = {
        key: "rzp_test_ks17mztWozd2AM",
        amount: cost * 100,
        currency: "INR",
        name: "Event Vista",
        description: "Private Event Booking",
        prefill: {
          name: firstName,
          email: userEmail,
          contact: "9073889463",
        },
        theme: {
          color: "#3399cc",
        },
        handler: function (response) {
          submitForm();
          Swal.fire({
            icon: "success",
            title: "Payment successful!",
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
          console.log("Payment successful:", response);
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
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
        <section className="ticketing-section">
          <div className="ticket-boxing">
            <div className="img-section">
              <img
                src={`data:image/jpeg;base64,${eventDetails?.data}`}
                alt="selected-event-img"
              />
            </div>
            <div className="ticket-flex">
              <div className="ticket-body-section">
                <div className="event-info">
                  <h1>{eventDetails?.eventType}</h1>
                  <p style={{ paddingBottom: "1rem" }}>
                    Book Your Tickets Today!
                  </p>
                </div>
                <div className="ticket-main-info">
                  <p className="location-event">
                    <i className="fas fa-map-marker-alt fa-3x" />
                    {eventDetails?.venueName}, {eventDetails?.state}
                  </p>
                  <p className="event-date">
                    <i className="fa-solid fa-calendar-days" />
                    {formatDate(eventDetails?.eventDate)}
                  </p>
                  <p className="ticket-price">
                    Ticket Price : &#8377; {eventDetails?.ticketPrice}/person
                  </p>
                  <div className="slot-book">
                    <form className="ticket-form" onSubmit={handlePayment}>
                      <input
                        type="hidden"
                        id="userEmail"
                        name="userEmail"
                        value={userEmail}
                      />
                      <input
                        type="hidden"
                        id="userDate"
                        name="userDate"
                        value={date}
                      />
                      <input
                        type="hidden"
                        id="state"
                        name="state"
                        value={state}
                      />
                      <input
                        type="hidden"
                        id="venue"
                        name="venue"
                        value={venueName}
                      />
                      <a
                        className="remove-button"
                        id="removeButton"
                        onClick={handleRemoveTicket}
                      >
                        <i className="fa-solid fa-square-minus"></i>
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
                        <i className="fa-solid fa-square-plus" />
                      </a>
                      <span className="ticket-condition">
                        (One person can book up to 5 tickets.)
                      </span>
                      <button
                        type="submit"
                        className="btn"
                        disabled={ticketCount === 0}
                        style={{
                          cursor: ticketCount === 0 ? "not-allowed" : "pointer",
                        }}
                      >
                        Pay ₹{cost}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="side-info">
                <div className="note" style={{ paddingBottom: "1rem" }}>
                  <h1>NOTE</h1>
                  <p>
                    Please note that tickets are non-refundable and
                    non-transferable.
                  </p>
                </div>
                <div className="about">
                  <h1>ABOUT</h1>
                  <p>
                    Book your tickets today exclusively from event vista. Please
                    do not forget to bring your tickets on the day of the event.
                    Piracy of tickets is strictly prohibited and unlawful. Any
                    individual found engaging in such activities will face legal
                    consequences and penalties. Seats are limited. Please book
                    your slots fast.
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
      )}
    </>
  );
};

export default Ticketing;