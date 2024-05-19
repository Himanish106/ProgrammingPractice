package com.event.backend.Service;

import java.util.List;
import java.util.Optional;

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

import jakarta.transaction.Transactional;

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

    public EventTypes getEventById(Long eventId) {
        Optional<EventTypes> eventOptional = privateEventRepo.findById(eventId);
        return eventOptional.orElse(null);
    }

    public EventTypes updateEvent(EventTypes eventType) {
        return privateEventRepo.save(eventType);
    }

    @Transactional
    public void deleteEvent(Long eventId) {
        privateEventRepo.deleteById(eventId);
    }

    public State createState(State state) {
        return stateRepository.save(state);
    }

    public State getStateById(Long id) {
        Optional<State> stateOptional = stateRepository.findById(id);
        return stateOptional.orElse(null);
    }

    public State updateState(State state) {
        return stateRepository.save(state);
    }

    public List<State> getAllStates() {
        return stateRepository.findAll();
    }

    @Transactional
    public void deleteState(Long stateId) {
        stateRepository.deleteById(stateId);
    }

    public City createCity(Long id, City city) {
        State state = stateRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("State not found"));
        city.setState(state);
        return cityRepository.save(city);
    }

    public City getCityByName(Long cityId) {
        Optional<City> cityOptional = cityRepository.findById(cityId);
        return cityOptional.orElse(null);
    }

    public City updateCity(City city) {
        return cityRepository.save(city);
    }

    public List<City> getCitiesByState(Long stateName) {
        return cityRepository.findByState_StateId(stateName);
    }

    @Transactional
    public void deleteCity(Long cityId) {
        cityRepository.deleteById(cityId);
    }

    public Venue createVenue(Long cityId, Venue venue) {
        City city = cityRepository.findById(cityId)
                .orElseThrow(() -> new RuntimeException("City not found"));
        venue.setCity(city);
        return venueRepository.save(venue);
    }

    public List<Venue> getVenuesByCity(Long cityName) {
        return venueRepository.findByCity_CityId(cityName);
    }

    public Venue getVenueByName(Long venueId) {
        Optional<Venue> venueOptional = venueRepository.findById(venueId);
        return venueOptional.orElse(null);
    }

    public Venue updateVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    @Transactional
    public void deleteVenue(Long venueId) {
        venueRepository.deleteById(venueId);
    }

    public Caterer createCaterer(Long venueId, Caterer caterer) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        caterer.setVenue(venue);
        return catererRepository.save(caterer);
    }

    public List<Caterer> getCaterersByVenue(Long venueName) {
        return catererRepository.findByVenue_VenueId(venueName);
    }

    public Caterer getCatererByName(Long catererId) {
        Optional<Caterer> catererOptional = catererRepository.findById(catererId);
        return catererOptional.orElse(null);
    }

    public Caterer updateCaterer(Caterer caterer) {
        return catererRepository.save(caterer);
    }

    @Transactional
    public void deleteCaterer(Long catererId) {
        catererRepository.deleteById(catererId);
    }

    public Media createMedia(Long venueId, Media media) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        media.setVenue(venue);
        return mediaRepository.save(media);
    }

    public List<Media> getMediasByVenue(Long venueName) {
        return mediaRepository.findByVenue_VenueId(venueName);
    }

    public Media getMediaByName(Long mediaId) {
        Optional<Media> mediaOptional = mediaRepository.findById(mediaId);
        return mediaOptional.orElse(null);
    }

    public Media updateMedia(Media media) {
        return mediaRepository.save(media);
    }

    @Transactional
    public void deleteMedia(Long mediaId) {
        mediaRepository.deleteById(mediaId);
    }

    public Design createDesign(Long venueId, Design design) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        design.setVenue(venue);
        return designRepository.save(design);
    }

    public List<Design> getDesignsByVenue(Long venueName) {
        return designRepository.findByVenue_VenueId(venueName);
    }

    public Design getDesignByName(Long designId) {
        Optional<Design> designOptional = designRepository.findById(designId);
        return designOptional.orElse(null);
    }

    public Design updateDesign(Design design) {
        return designRepository.save(design);
    }

    @Transactional
    public void deleteDesign(Long designId) {
        designRepository.deleteById(designId);
    }

    public PrivateOrder savePrivateEventBooking(PrivateOrder privateOrder) {
        return privateOrderRepository.save(privateOrder);
    }

    @Transactional
    public void deletePrivateOrder(Long id){
        privateOrderRepository.deleteById(id);
    }

    public List<PrivateOrder> getAllPrivateOrders(){
        return privateOrderRepository.findAll();
    }
}
