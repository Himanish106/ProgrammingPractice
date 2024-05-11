package com.event.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.backend.Entity.PrivateEventBooking.Caterer;
import com.event.backend.Entity.PrivateEventBooking.City;
import com.event.backend.Entity.PrivateEventBooking.Design;
import com.event.backend.Entity.PrivateEventBooking.EventTypes;
import com.event.backend.Entity.PrivateEventBooking.Media;
import com.event.backend.Entity.PrivateEventBooking.PrivateOrder;
import com.event.backend.Entity.PrivateEventBooking.State;
import com.event.backend.Entity.PrivateEventBooking.Venue;
import com.event.backend.EventRepository.PrivateEventRepository.CatererRepository;
import com.event.backend.EventRepository.PrivateEventRepository.CityRepository;
import com.event.backend.EventRepository.PrivateEventRepository.DesignRepository;
import com.event.backend.EventRepository.PrivateEventRepository.EventTypesRepo;
import com.event.backend.EventRepository.PrivateEventRepository.MediaRepository;
import com.event.backend.EventRepository.PrivateEventRepository.PrivateOrderRepository;
import com.event.backend.EventRepository.PrivateEventRepository.StateRepository;
import com.event.backend.EventRepository.PrivateEventRepository.VenueRepository;

@Service
public class PrivateEventService {

    @Autowired
    private EventTypesRepo privateEventRepo;

    @Autowired
    private StateRepository stateRepository;

    @Autowired
    private CityRepository cityRepository;

    @Autowired
    private VenueRepository venueRepository;

    @Autowired
    private CatererRepository catererRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private DesignRepository designRepository;

    @Autowired
    private PrivateOrderRepository privateOrderRepository;

    public EventTypes createEvents(EventTypes events) {
        return privateEventRepo.save(events);
    }

    public List<EventTypes> getEventTypes() {
        return privateEventRepo.findAll();
    }

    public State createState(State state) {
        return stateRepository.save(state);
    }

    public List<State> getAllStates() {
        return stateRepository.findAll();
    }

    public City createCity(String stateName, City city) {
        State state = stateRepository.findById(stateName)
                .orElseThrow(() -> new RuntimeException("State not found"));
        city.setState(state);
        return cityRepository.save(city);
    }

    public List<City> getCitiesByState(String stateName) {
        return cityRepository.findByState_StateName(stateName);
    }

    public Venue createVenue(String cityName, Venue venue) {
        City city = cityRepository.findById(cityName)
                .orElseThrow(() -> new RuntimeException("City not found"));
        venue.setCity(city);
        return venueRepository.save(venue);
    }

    public List<Venue> getVenuesByCity(String cityName) {
        return venueRepository.findByCity_CityName(cityName);
    }

    public Caterer createCaterer(String venueName, Caterer caterer) {
        Venue venue = venueRepository.findById(venueName)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        caterer.setVenue(venue);
        return catererRepository.save(caterer);
    }

    public List<Caterer> getCaterersByVenue(String venueName) {
        return catererRepository.findByVenue_VenueName(venueName);
    }

    public Media createMedia(String venueName, Media media) {
        Venue venue = venueRepository.findById(venueName)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        media.setVenue(venue);
        return mediaRepository.save(media);
    }

    public List<Media> getMediasByVenue(String venueName) {
        return mediaRepository.findByVenue_VenueName(venueName);
    }

    public Design createDesign(String venueName, Design design) {
        Venue venue = venueRepository.findById(venueName)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        design.setVenue(venue);
        return designRepository.save(design);
    }

    public List<Design> getDesignsByVenue(String venueName) {
        return designRepository.findByVenue_VenueName(venueName);
    }

    public PrivateOrder savePrivateEventBooking(PrivateOrder privateOrder){
      return privateOrderRepository.save(privateOrder);
    }
}
