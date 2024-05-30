import React, { useState, useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import "../../CSS/PrivateEventBooking.css";
import privateImg from "../../Images/Public Events_transparent.png";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
const PublicEventBooking = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  const [eventTypes, setEventTypes] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedStateName, setSelectedStateName] = useState("");
  const [states, setStates] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityName, setSelectedCityName] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [venues, setVenues] = useState([]);
  const [cateringFacility, setCateringFacility] = useState("");
  const [selectedCaterer, setSelectedCaterer] = useState("");
  const [caterers, setCaterers] = useState([]);
  const [designAndPhotoFacility, setdesignAndPhotoFacility] = useState("");
  const [designs, setDesigns] = useState([]);
  const [selectedDesignServices, setSelectedDesignServices] = useState("");
  const [medias, setMedias] = useState([]);
  const [selectedPhotoVideoServices, setSelectedPhotoVideoServices] =
    useState("");
  const [capacity, setCapacity] = useState("");
  const [advertising, setAdvertising] = useState("");
  const [onsiteManagement, setOnsiteManagement] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [inputMessage, setInputMessage] = useState("");
  const [venuePrice, setVenuePrice] = useState(0);
  const [catererPrice, setCatererPrice] = useState(0);
  const [mediaPrice, setMediaPrice] = useState(0);
  const [designPrice, setDesignPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const email = decodedToken.email; 
      setUserEmail(email);
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userFirstName = decodedToken.firstName; 
      setFirstName(userFirstName);
    }
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
  useEffect(() => {
    axios
      .get("http://localhost:8080/privateeventcontroller/publiceventdisplay")
      .then((response) => {
        setEventTypes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event types:", error);
      });
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
  useEffect(() => {
    if (selectedState) {
      axios
        .get(
          `http://localhost:8080/privateeventcontroller/publiccities/${encodeURIComponent(
            selectedState
          )}`
        )
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    }
  }, [selectedState]);
  useEffect(() => {
    if (selectedCity) {
      axios
        .get(
          `http://localhost:8080/privateeventcontroller/publicvenues/${encodeURIComponent(
            selectedCity
          )}`
        )
        .then((response) => {
          setVenues(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedVenue) {
      const fetchCaterers = async () => {
        try {
          const caterersResponse = await axios.get(
            `http://localhost:8080/privateeventcontroller/publiccaterers/${encodeURIComponent(
              selectedVenue.venueId
            )}`
          );
          setCaterers(caterersResponse.data);
          console.log(caterersResponse.data);
        } catch (error) {
          console.error("Error fetching caterers:", error);
        }
      };

      fetchCaterers();
    }
  }, [selectedVenue]);
  useEffect(() => {
    if (selectedVenue) {
      const fetchDesigns = async () => {
        try {
          const designsResponse = await axios.get(
            `http://localhost:8080/privateeventcontroller/publicdesigns/${encodeURIComponent(
              selectedVenue.venueId
            )}`
          );
          setDesigns(designsResponse.data);
        } catch (error) {
          console.error("Error fetching caterers:", error);
        }
      };

      fetchDesigns();
    }
  }, [selectedVenue]);
  useEffect(() => {
    if (selectedVenue) {
      const fetchMedias = async () => {
        try {
          const mediasResponse = await axios.get(
            `http://localhost:8080/privateeventcontroller/publicmedias/${encodeURIComponent(
              selectedVenue.venueId
            )}`
          );
          setMedias(mediasResponse.data);
        } catch (error) {
          console.error("Error fetching caterers:", error);
        }
      };

      fetchMedias();
    }
  }, [selectedVenue]);
  useEffect(() => {
    if (selectedVenue) {
      setVenuePrice(selectedVenue.price);
    }
  }, [selectedVenue]);

  const handleStateChange = (event) => {
    const selectedStateId = event.target.value;
    if (selectedStateId === "") {
      setSelectedState("");
      setSelectedCity("");
      setSelectedVenue("");
    } else {
      const selectedState = states.find(
        (state) => state.stateId === parseInt(selectedStateId)
      );
      setSelectedState(selectedState.stateId);
      setSelectedStateName(selectedState.stateName);
      setSelectedCity("");
      setSelectedVenue("");
    }
  };
  const handleCityChange = (event) => {
    const selectedCityId = event.target.value;
    if (selectedCityId === "") {
      setSelectedCity("");
      setSelectedVenue("");
    } else {
      const selectedCity = cities.find(
        (city) => city.cityId === parseInt(selectedCityId)
      );
      setSelectedCity(selectedCity.cityId);
      setSelectedCityName(selectedCity.cityName);
    }
  };

   const handleVenueChange = (event) => {
    const selectedVenueId = event.target.value;
    console.log(`Selected Venue ID: ${selectedVenueId}`); // Log the selected venue ID
    const foundVenue = venues.find(
      (venue) => venue.venueId === parseInt(selectedVenueId)
    );
    console.log(`Found Venue: ${JSON.stringify(foundVenue)}`); // Log the found venue details
    setSelectedVenue(foundVenue);
    setCateringFacility("");
    setdesignAndPhotoFacility("");
    checkFormValidity();
  };
  const selectedCatererChange = (event) => {
    const catererId = event.target.value;
    if (catererId === "") {
      setSelectedCaterer("");
      setCatererPrice(0);
    } else {
      const selectedCaterer = caterers.find(
        (caterer) => caterer.catererId.toString() === catererId
      );
      setSelectedCaterer(selectedCaterer);
      setCatererPrice(selectedCaterer.price); 
    }
  };
  
  const handleCateringChange = (event) => {
    const cateringValue = event.target.value;
    setCateringFacility(cateringValue);
    setSelectedCaterer("");
    checkFormValidity();
  };
  const handleDesignandPhotoServiceChange = (event) => {
    setdesignAndPhotoFacility(event.target.value);
    setSelectedDesignServices("");
    setSelectedPhotoVideoServices("");
    checkFormValidity();
  };
  const selectedDesignChange = (event) => {
    const designerId = event.target.value;
    if (designerId === "") {
      setSelectedDesignServices("");
      setDesignPrice(0);
    } else {
      const selectedDesign = designs.find(
        (design) => design.designId.toString() === designerId
      );
      setSelectedDesignServices(selectedDesign);
      setDesignPrice(selectedDesign.price);
    }
  };
  
  const selectedMediaChange = (event) => {
    const mediaId = event.target.value;
    if (mediaId === "") {
      setSelectedPhotoVideoServices("");
      setMediaPrice(0);
    } else {
      const selectedMedia = medias.find(
        (media) => media.mediaId.toString() === mediaId
      );
      setSelectedPhotoVideoServices(selectedMedia);
      setMediaPrice(selectedMedia.price);
    }
  };
  
  const handleAdvertisingChange = (event) => {
    setAdvertising(event.target.value);

    checkFormValidity();
  };
  const handleSiteManagementChange = (event) => {
    setOnsiteManagement(event.target.value);

    checkFormValidity();
  };
  const handleCapacityChange = (event) => {
    const enteredCapacity = parseInt(event.target.value);
    if (enteredCapacity > selectedVenue.capacity) {
      alert("Capacity should not exceed maximum capacity.");
      return;
    }
    setCapacity(enteredCapacity);

    checkFormValidity();
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
      advertising &&
      capacity &&
      onsiteManagement &&
      inputMessage &&
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
  const handlePayment = async (event) => {
    event.preventDefault();
    try {
      const options = {
        key: "rzp_test_ks17mztWozd2AM",
        amount: totalPrice * 100,
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
            title: "Payment successfull!",
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
  const submitForm = async () => {
    const formData = {
      email: userEmail,
      eventType: document.getElementById("eventType").value,
      state: selectedStateName,
      city: selectedCityName,
      venueName: selectedVenue ? selectedVenue.venueName : null,
      eventDescription: inputMessage,
      eventDate: selectedDate,
      cateringFacility,
      caterer: selectedCaterer ? selectedCaterer.serviceName : null,
      designAndMediaFacility:designAndPhotoFacility,
      advertisingFacility:advertising,
      onsiteManagementFacility:onsiteManagement,
      designService: selectedDesignServices ? selectedDesignServices.serviceProviderName : null,
      mediaService: selectedPhotoVideoServices ? selectedPhotoVideoServices.serviceProviderName : null,
      capacity,
      totalPrice
    };
    try {
      const response = await axios.post("http://localhost:8080/privateeventcontroller/bookpublicorder", formData);
      console.log("Form submitted successfully:", response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const totalPrice = venuePrice + catererPrice + designPrice + mediaPrice;
    setTotalPrice(totalPrice);
  }, [venuePrice, catererPrice, designPrice, mediaPrice]);
  useEffect(() => {

    checkFormValidity();
  }, [
    selectedVenue,
    cateringFacility,
    designAndPhotoFacility,
    advertising,
    onsiteManagement,
  ]);
  useEffect(() => {
    checkFormValidity();
  }, [
    selectedState,
    selectedCity,
    selectedVenue,
    cateringFacility,
    advertising,
    designAndPhotoFacility,
    onsiteManagement,
    selectedCaterer,
    selectedDesignServices,
    selectedPhotoVideoServices,
    inputMessage,
    selectedDate,
    capacity,
  ]);

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
        <section className="pricing event-booking-private">
          <div className="events">
            <div className="public-event manage-private-event">
              <h3 className="title">Public Events</h3>
              <h3 className="amount">
                Starting from <span className="col">$800</span>
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check" />
                  Event Promotion and Marketing
                </li>
                <li>
                  <i className="fas fa-check" />
                  Ticketing and Registration Management
                </li>
                <li>
                  <i className="fas fa-check" />
                  Venue Selection and Logistics
                </li>
                <li>
                  <i className="fas fa-check" />
                  On-Site Event Management
                </li>
                <li>
                  <i className="fas fa-check" />
                  Vendor Coordination and Support
                </li>
              </ul>
              <a href="#parentForm" className="btn">
                check out
              </a>
            </div>
            <div className="private-event-img">
              <img src={privateImg} alt="private Image" />
            </div>
          </div>
          <div className="parent-private-form" id="parentForm">
            <div className="private-form">
              <div className="private-form-heading">
                <h3>Want to Book Your Own Event?</h3>
                <h3>
                  <span className="col">Fill the Details Below</span>
                </h3>
              </div>
              <form className="private-event-form" onSubmit={handlePayment}>
                <div className="event-select facilities">
                  <label htmlFor="eventType">Select Event Type:</label>
                  <select id="eventType" name="eventType" >
                    <option value="">Select Event Type</option>
                    {eventTypes.map((eventType) => (
                      <option
                        key={eventType.eventType}
                        value={eventType.eventType}
                      >
                        {eventType.eventType}
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
                    {states.map((state) => (
                      <option key={state.stateId} value={state.stateId}>
                        {state.stateName}
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
                      {cities.map((city) => (
                        <option key={city.cityId} value={city.cityId}>
                          {city.cityName}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {selectedCity && (
                  <div className="selected-venue facilities">
                    <label htmlFor="venue">Select Venue:</label>
                    <select
                      id="venue"
                      onChange={handleVenueChange}
                      value={selectedVenue ? selectedVenue.venueId : ""}
                    >
                      <option value="">Select Venue</option>
                      {venues.map((venue) => (
                        <option key={venue.venueId} value={venue.venueId}>
                          {venue.venueName}
                        </option>
                      ))}
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
                        value={selectedVenue.venueName}
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
                <div
                  className="event-description facilities"
                  style={{ position: "relative" }}
                >
                  <label htmlFor="eventDescription">Event Description</label>
                  <textarea
                    id="eventDescription"
                    name="eventDescription"
                    rows="8"
                    cols="50"
                    placeholder="Describe your event..."
                    value={inputMessage}
                    onChange={handleMessageChange}
                  ></textarea>
                  <span className="event-describe-count">{`${wordCount}/1000 words`}</span>
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
                          value={
                            selectedCaterer ? selectedCaterer.catererId : ""
                          }
                          onChange={selectedCatererChange}
                        >
                          <option value="">Select Caterer</option>
                          {caterers.map((caterer) => (
                            <option
                              key={caterer.catererId}
                              value={caterer.catererId}
                            >
                              {caterer.serviceName}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}
                {selectedVenue && (
                  <div className="design-media">
                    <div className="facilities">
                      <label>
                        Do you want our Design and media facilities?
                      </label>
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
                          value={
                            selectedDesignServices
                              ? selectedDesignServices.designId
                              : ""
                          }
                          onChange={selectedDesignChange}
                        >
                          <option value="">Select Design Service</option>
                          {designs.map((design) => (
                            <option
                              key={design.designId}
                              value={design.designId}
                            >
                              {design.serviceProviderName}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    {designAndPhotoFacility === "yes" && selectedVenue && (
                      <div className="facilities">
                        <label>Select Media Service:</label>
                        <select
                          value={
                            selectedPhotoVideoServices
                              ? selectedPhotoVideoServices.mediaId
                              : ""
                          }
                          onChange={selectedMediaChange}
                        >
                          <option value="">Select Media Service</option>
                          {medias.map((photoVideoService) => (
                            <option
                              key={photoVideoService.mediaId}
                              value={photoVideoService.mediaId}
                            >
                              {photoVideoService.serviceProviderName}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                )}
                {selectedVenue && (
                  <div className="design-media">
                    <div className="facilities">
                      <label>
                        Do you want to promote your event through advertising?
                      </label>
                      <label className="option-select">
                        <input
                          type="radio"
                          name="advertisingFacility"
                          value="yes"
                          checked={advertising === "yes"}
                          onChange={handleAdvertisingChange}
                        />
                        Yes
                      </label>
                      <label className="option-select">
                        <input
                          type="radio"
                          name="advertisingFacility"
                          value="no"
                          checked={advertising === "no"}
                          onChange={handleAdvertisingChange}
                        />
                        No
                      </label>
                    </div>
                  </div>
                )}
                {selectedVenue && (
                  <div className="design-media">
                    <div className="facilities">
                      <label>
                        Do you want onsite event management facility?
                      </label>
                      <label className="option-select">
                        <input
                          type="radio"
                          name="onsiteFacility"
                          value="yes"
                          checked={onsiteManagement === "yes"}
                          onChange={handleSiteManagementChange}
                        />
                        Yes
                      </label>
                      <label className="option-select">
                        <input
                          type="radio"
                          name="onsiteFacility"
                          value="no"
                          checked={onsiteManagement === "no"}
                          onChange={handleSiteManagementChange}
                        />
                        No
                      </label>
                    </div>
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
      )}
    </>
  );
};
export default PublicEventBooking;
