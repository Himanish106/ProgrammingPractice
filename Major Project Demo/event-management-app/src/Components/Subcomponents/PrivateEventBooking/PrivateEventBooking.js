import React, { useState, useEffect } from "react";
import eventTypesData from "../../../Global Files/privateevent.json";
import venueData from "../../../Global Files/statesandlocations.json";
import "../../CSS/PrivateEventBooking.css";
import privateImg from "../../Images/PrivateEventLogo.jpg";
const PrivateEventBooking = () => {
  const eventTypes = eventTypesData.eventTypes;
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [cateringFacility, setCateringFacility] = useState("");
  const [selectedCaterer, setSelectedCaterer] = useState("");
  const [designAndPhotoFacility, setdesignAndPhotoFacility] = useState("");
  const [selectedDesignServices, setSelectedDesignServices] = useState("");
  const [selectedPhotoVideoServices, setSelectedPhotoVideoServices] =
    useState("");
  const [capacity, setCapacity] = useState("");
  const [totalPrice, setTotalPrice] = useState(
    selectedVenue ? selectedVenue.price1 : 0
  );
  const [eventDescription, setEventDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity("");
    setSelectedVenue(null);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedVenue(null);
  };

  const handleVenueChange = (event) => {
    const venueIndex = event.target.value;
    const venues = venueData[selectedState][selectedCity];
    setSelectedVenue(venues[venueIndex]);
    calculatedTotalPrice();
    setCateringFacility("");
    setdesignAndPhotoFacility("");
    checkFormValidity();
  };
  const handleCateringChange = (event) => {
    setCateringFacility(event.target.value);
    setSelectedCaterer("");
    calculatedTotalPrice();
    checkFormValidity();
  };
  const handleDesignandPhotoServiceChange = (event) => {
    setdesignAndPhotoFacility(event.target.value);
    setSelectedDesignServices("");
    setSelectedPhotoVideoServices("");
    calculatedTotalPrice();
    checkFormValidity();
  };
  const handleCapacityChange = (event) => {
    const enteredCapacity = parseInt(event.target.value);
    if (enteredCapacity > selectedVenue.capacity) {
      alert("Capacity should not exceed maximum capacity.");
      return;
    }
    setCapacity(enteredCapacity);
    calculatedTotalPrice();
    checkFormValidity();
  };
  const calculatedTotalPrice = () => {
    if (selectedVenue) {
      let totalPrice = selectedVenue.price1;
      if (cateringFacility === "yes") {
        totalPrice += selectedVenue.price2;
      }

      if (designAndPhotoFacility === "yes") {
        totalPrice += selectedVenue.price3;
      }

      if (cateringFacility === "yes" && designAndPhotoFacility === "yes") {
        totalPrice += selectedVenue.price2 + selectedVenue.price3;
      }

      setTotalPrice(totalPrice);
    }
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const checkFormValidity = () => {
    if (
      selectedState &&
      selectedCity &&
      selectedVenue &&
      cateringFacility &&
      designAndPhotoFacility &&
      capacity &&
      eventDescription &&
      selectedDate &&
      (cateringFacility === "no" || selectedCaterer) &&
      (designAndPhotoFacility === "no" ||
        (selectedDesignServices && selectedPhotoVideoServices))
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
  useEffect(() => {
    calculatedTotalPrice();
    checkFormValidity();
  }, [selectedVenue, cateringFacility, designAndPhotoFacility]);
  useEffect(() => {
    checkFormValidity();
  }, [
    selectedState,
    selectedCity,
    selectedVenue,
    cateringFacility,
    designAndPhotoFacility,
    selectedCaterer,
    selectedDesignServices,
    selectedPhotoVideoServices,
    eventDescription,
    selectedDate,
    capacity,
  ]);

  return (
    <section className="pricing event-booking-private">
      <div className="events">
        <div className="private-event manage-private-event">
          <h3 className="title">Private Events</h3>
          <h3 className="amount">
            Starting from <span className="col">$500</span>
          </h3>
          <ul>
            <li>
              <i className="fas fa-check" />
              Planning and Coordination
            </li>
            <li>
              <i className="fas fa-check" />
              Personalized Décor and Design
            </li>
            <li>
              <i className="fas fa-check" />
              Catering and Culinary Services
            </li>
            <li>
              <i className="fas fa-check" />
              Entertainment and Activities
            </li>
            <li>
              <i className="fas fa-check" />
              Event Photography and Videography
            </li>
          </ul>
          <a href="#" className="btn">
            check out
          </a>
        </div>
        <div className="private-event-img">
          <img src={privateImg} alt="private Image" />
        </div>
      </div>
      <div className="parent-private-form">
        <div className="private-form">
          <div className="private-form-heading">
          <h3>
            Want to Book Your Own Event?
            
          </h3>
          <h3><span className="col">Fill the Details Below</span></h3>
          </div>
          <form className="private-event-form">
            <div className="event-select facilities">
              <label htmlFor="eventType">Select Event Type:</label>
              <select id="eventType" name="eventType">
                <option value="">Select Event Type</option>
                {eventTypes.map((eventType) => (
                  <option key={eventType} value={eventType}>
                    {eventType}
                  </option>
                ))}
              </select>
            </div>
            <div className="selected-state facilities">
              <label htmlFor="state">Select State:</label>
              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="">Select State</option>
                {Object.keys(venueData).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            {selectedState && (
              <div className="selected-city facilities">
                <label htmlFor="city">Select City</label>
                <select
                  id="city"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="">Select City</option>
                  {Object.keys(venueData[selectedState] || {}).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {selectedCity && (
              <div className="selected-venue facilities">
                <label htmlFor="venue">Select Venue:</label>
                <select id="venue" onChange={handleVenueChange}>
                  <option value="">Select Venue</option>
                  {venueData[selectedState][selectedCity].map(
                    (venue, index) => (
                      <option key={index} value={index}>
                        {venue.name}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}
            {selectedVenue && (
              <div className="venue-details facilities">
                <div className="venueNamediv facilities">
                  <label htmlFor="venueName">Venue Name:</label>
                  <input
                    id="venueName"
                    type="text"
                    value={selectedVenue.name}
                    disabled
                  />
                </div>
                <div className="venueCapacitydiv facilities">
                  <label htmlFor="venueCapacity">Capacity:</label>
                  <input
                    id="venueCapacity"
                    type="text"
                    value={selectedVenue.capacity}
                    disabled
                  />
                </div>
                <div className="venueLocationdiv facilities">
                  <label htmlFor="venueLocation">Location:</label>
                  <input
                    id="venueLocation"
                    type="text"
                    value={selectedVenue.location}
                    disabled
                  />
                </div>
                <div className="venueContactdiv facilities">
                  <label htmlFor="venueContact">Contact:</label>
                  <input
                    id="venueContact"
                    type="text"
                    value={selectedVenue.contact}
                    disabled
                  />
                </div>
              </div>
            )}
            <div className="event-description facilities">
              <label htmlFor="eventDescription">Event Description</label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                rows="4"
                cols="50"
                placeholder="Describe your event..."
                onChange={(e) => setEventDescription(e.target.value)}
              ></textarea>
            </div>
            {selectedVenue && (
              <div className="date-input-container facilities">
                <label htmlFor="date">Select your date of event</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="date-input"
                />
              </div>
            )}
            {selectedVenue && (
              <div className="catering-facility facilities">
                <label>Do you want our Catering facility?</label>
                <div>
                  <label className="option-select">
                    <input
                      type="radio"
                      name="cateringFacility"
                      value="yes"
                      checked={cateringFacility === "yes"}
                      onChange={handleCateringChange}
                    />
                    Yes
                  </label>
                  <label className="option-select">
                    <input
                      type="radio"
                      name="cateringFacility"
                      value="no"
                      checked={cateringFacility === "no"}
                      onChange={handleCateringChange}
                    />
                    No
                  </label>
                </div>
                {cateringFacility === "yes" && selectedVenue && (
                  <div className="select-caterer facilities">
                    <label>Select Caterer:</label>
                    <select
                      value={selectedCaterer}
                      onChange={(e) => setSelectedCaterer(e.target.value)}
                    >
                      <option value="">Select Caterer</option>
                      {selectedVenue.cateringServices.map((caterer, index) => (
                        <option key={index} value={caterer}>
                          {caterer}
                        </option>
                      ))}
                      <option value="Leave Upon Us">Leave Upon Us</option>
                    </select>
                  </div>
                )}
              </div>
            )}
            {selectedVenue && (
              <div className="design-media">
                <div className="facilities">
                  <label>Do you want our Design and media facilities?</label>
                  <label className="option-select">
                    <input
                      type="radio"
                      name="designandPhotoFacility"
                      value="yes"
                      checked={designAndPhotoFacility === "yes"}
                      onChange={handleDesignandPhotoServiceChange}
                    />
                    Yes
                  </label>
                  <label className="option-select">
                    <input
                      type="radio"
                      name="designandPhotoFacility"
                      value="no"
                      checked={designAndPhotoFacility === "no"}
                      onChange={handleDesignandPhotoServiceChange}
                    />
                    No
                  </label>
                </div>
                {designAndPhotoFacility === "yes" && selectedVenue && (
                  <div className="facilities">
                    <label>Select Design Service:</label>
                    <select
                      value={selectedDesignServices}
                      onChange={(e) =>
                        setSelectedDesignServices(e.target.value)
                      }
                    >
                      <option value="">Select Design Service</option>
                      {selectedVenue.designServices.map((design, index) => (
                        <option key={index} value={design}>
                          {design}
                        </option>
                      ))}
                      <option value="Leave Upon Us">Leave Upon Us</option>
                    </select>
                  </div>
                )}
                {designAndPhotoFacility === "yes" && selectedVenue && (
                  <div className="facilities">
                    <label>Select Media Service:</label>
                    <select
                      value={selectedPhotoVideoServices}
                      onChange={(e) =>
                        setSelectedPhotoVideoServices(e.target.value)
                      }
                    >
                      <option value="">Select Media Service</option>
                      {selectedVenue.photoVideoServices.map(
                        (photoVideoService, index) => (
                          <option key={index} value={photoVideoService}>
                            {photoVideoService}
                          </option>
                        )
                      )}
                      <option value="Leave Upon Us">Leave Upon Us</option>
                    </select>
                  </div>
                )}
              </div>
            )}
            {selectedVenue && (
              <div className="capacity facilities">
                <label>Capacity(People)</label>
                <input
                  type="number"
                  value={capacity}
                  onChange={handleCapacityChange}
                  placeholder="Enter Capacity"
                />
              </div>
            )}
            {selectedVenue && (
              <div className="submit-btn facilities">
                <button
                  type="submit"
                  className="btn"
                  disabled={!isFormValid}
                  style={{
                    cursor: isFormValid ? "pointer" : "not-allowed",
                  }}
                >
                  Pay Rs: {totalPrice}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default PrivateEventBooking;
