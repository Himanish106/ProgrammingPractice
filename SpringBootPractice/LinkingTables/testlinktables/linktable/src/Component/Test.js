import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [caterers, setCaterers] = useState([]);
  const [selectedCaterer, setSelectedCaterer] = useState("");
  const [mediaServices, setMediaServices] = useState([]);
  const [selectedMediaService, setSelectedMediaService] = useState("");
  const [venuePrice, setVenuePrice] = useState(0);
  const [catererPrice, setCatererPrice] = useState(0);
  const [mediaPrice, setMediaPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/cities/${selectedState}`
          );
          setCities(response.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      }
    };
    fetchCities();
  }, [selectedState]);

  // Fetch venues when the selected city changes
  useEffect(() => {
    const fetchVenues = async () => {
      if (selectedCity) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/venues/${selectedCity}`
          );
          setVenues(response.data);
        } catch (error) {
          console.error("Error fetching venues:", error);
        }
      }
    };
    fetchVenues();
  }, [selectedCity]);

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/states");
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCaterers = async () => {
      if (selectedVenue) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/caterers/${selectedVenue.venueId}`
          );
          setCaterers(response.data);
        } catch (error) {
          console.error("Error fetching caterers:", error);
        }
      }
    };
    fetchCaterers();
  }, [selectedVenue]);
  useEffect(() => {
    const fetchMediaServices = async () => {
      if (selectedVenue) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/medias/${selectedVenue.venueId}`
          );
          setMediaServices(response.data);
        } catch (error) {
          console.error("Error fetching media services:", error);
        }
      }
    };
    fetchMediaServices();
  }, [selectedVenue]);
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleVenueChange = (event) => {
    const venueId = event.target.value;
    const selectedVenue = venues.find(
      (venue) => venue.venueId === Number(venueId)
    );
    setSelectedVenue(selectedVenue);
    setVenuePrice(selectedVenue.price);
  };
  const handleCatererChange = (event) => {
    const catererId = event.target.value;
    const selectedCaterer = caterers.find(
      (caterer) => caterer.cateringServiceId === Number(catererId)
    );
    setSelectedCaterer(selectedCaterer);
    setCatererPrice(selectedCaterer.price); // Set the caterer price
  };

  const handleMediaServiceChange = (event) => {
    const mediaServiceId = event.target.value;
    const selectedMediaService = mediaServices.find(
      (mediaService) => mediaService.mediaServiceId === Number(mediaServiceId)
    );
    setSelectedMediaService(selectedMediaService);
    setMediaPrice(selectedMediaService.price); // Set the media service price
  };
  useEffect(() => {
    const totalPrice = venuePrice + catererPrice + mediaPrice;
    setTotalPrice(totalPrice);
  }, [venuePrice, catererPrice, mediaPrice ]);
  
  return (
    <div>
      <div className="selected-state facilities">
        <label htmlFor="state">Select State:</label>
        <select id="state" onChange={handleStateChange} value={selectedState}>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.stateId} value={state.stateId}>
              {state.stateName}
            </option>
          ))}
        </select>
      </div>
      <div className="selected-city facilities">
        <label htmlFor="city">Select City</label>
        <select id="city" onChange={handleCityChange} value={selectedCity}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.cityId} value={city.cityId}>
              {city.cityName}
            </option>
          ))}
        </select>
      </div>
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
        </div>
      )}
      {selectedVenue && (
        <div className="catering-facility facilities">
          <label>Do you want our Catering facility?</label>
          <div>
            <label className="option-select">
              <input type="radio" name="cateringFacility" value="yes" />
              Yes
            </label>
            <label className="option-select">
              <input type="radio" name="cateringFacility" value="no" />
              No
            </label>
          </div>
          <div className="select-caterer facilities">
            <label>Select Caterer:</label>
            <select
              id="caterer"
              onChange={handleCatererChange}
              value={selectedCaterer ? selectedCaterer.cateringServiceId : ""}
            >
              <option value="">Select Caterer</option>
              {caterers.map((caterer) => (
                <option
                  key={caterer.cateringServiceId}
                  value={caterer.cateringServiceId}
                >
                  {caterer.serviceName}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      {selectedVenue && (
        <div className="design-media">
          <div className="facilities">
            <label>Do you want our Design and media facilities?</label>
            <label className="option-select">
              <input type="radio" name="designandPhotoFacility" value="yes" />
              Yes
            </label>
            <label className="option-select">
              <input type="radio" name="designandPhotoFacility" value="no" />
              No
            </label>
          </div>
          {selectedVenue && (
            <div className="facilities">
              <label>Select Design Service:</label>
              <select
                id="mediaService"
                onChange={handleMediaServiceChange}
                value={
                  selectedMediaService
                    ? selectedMediaService.mediaServiceId
                    : ""
                }
              >
                <option value="">Select Design Service</option>
                {mediaServices.map((mediaService, index) => (
                  <option key={index} value={mediaService.mediaServiceId}>
                    {mediaService.serviceProviderName}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
      {selectedVenue && (
        <button type="button">{totalPrice}</button>
      )}
    </div>
  );
};

export default Test;
