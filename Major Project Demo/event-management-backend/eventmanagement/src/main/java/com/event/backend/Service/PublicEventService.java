package com.event.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.event.backend.Entity.PublicEventBooking.PublicCaterer;
import com.event.backend.Entity.PublicEventBooking.PublicCity;
import com.event.backend.Entity.PublicEventBooking.PublicDesign;
import com.event.backend.Entity.PublicEventBooking.PublicEventTypes;
import com.event.backend.Entity.PublicEventBooking.PublicMedia;
import com.event.backend.Entity.PublicEventBooking.PublicOrder;
import com.event.backend.Entity.PublicEventBooking.PublicState;
import com.event.backend.Entity.PublicEventBooking.PublicVenue;
import com.event.backend.EventRepository.PublicEventRepository.PublicCatererRepository;
import com.event.backend.EventRepository.PublicEventRepository.PublicCityRepository;
import com.event.backend.EventRepository.PublicEventRepository.PublicDesignRepository;
import com.event.backend.EventRepository.PublicEventRepository.PublicEventTypesRepo;
import com.event.backend.EventRepository.PublicEventRepository.PublicMediaRepository;
import com.event.backend.EventRepository.PublicEventRepository.PublicOrderRepository;
import com.event.backend.EventRepository.PublicEventRepository.PublicStateRepository;
import com.event.backend.EventRepository.PublicEventRepository.PublicVenueRepository;

@Service
public class PublicEventService {
    @Autowired
    private PublicEventTypesRepo privateEventRepo;

    @Autowired
    private PublicStateRepository stateRepository;

    @Autowired
    private PublicCityRepository cityRepository;

    @Autowired
    private PublicVenueRepository venueRepository;

    @Autowired
    private PublicCatererRepository catererRepository;

    @Autowired
    private PublicMediaRepository mediaRepository;

    @Autowired
    private PublicDesignRepository designRepository;

    @Autowired
    private PublicOrderRepository publicOrderRepository;

    public PublicEventTypes createEvents(PublicEventTypes events) {
        return privateEventRepo.save(events);
    }

    public List<PublicEventTypes> getEventTypes() {
        return privateEventRepo.findAll();
    }

    public PublicState createState(PublicState state) {
        return stateRepository.save(state);
    }

    public List<PublicState> getAllStates() {
        return stateRepository.findAll();
    }

    public PublicCity createCity(String stateName, PublicCity city) {
        PublicState state = stateRepository.findById(stateName)
                .orElseThrow(() -> new RuntimeException("State not found"));
        city.setState(state);
        return cityRepository.save(city);
    }

    public List<PublicCity> getCitiesByState(String stateName) {
        return cityRepository.findByState_StateName(stateName);
    }

    public PublicVenue createVenue(String cityName, PublicVenue venue) {
        PublicCity city = cityRepository.findById(cityName)
                .orElseThrow(() -> new RuntimeException("City not found"));
        venue.setCity(city);
        return venueRepository.save(venue);
    }

    public List<PublicVenue> getVenuesByCity(String cityName) {
        return venueRepository.findByCity_CityName(cityName);
    }

    public PublicCaterer createCaterer(String venueName, PublicCaterer caterer) {
        PublicVenue venue = venueRepository.findById(venueName)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        caterer.setVenue(venue);
        return catererRepository.save(caterer);
    }

    public List<PublicCaterer> getCaterersByVenue(String venueName) {
        return catererRepository.findByVenue_VenueName(venueName);
    }

    public PublicMedia createMedia(String venueName, PublicMedia media) {
        PublicVenue venue = venueRepository.findById(venueName)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        media.setVenue(venue);
        return mediaRepository.save(media);
    }

    public List<PublicMedia> getMediasByVenue(String venueName) {
        return mediaRepository.findByVenue_VenueName(venueName);
    }

    public PublicDesign createDesign(String venueName, PublicDesign design) {
        PublicVenue venue = venueRepository.findById(venueName)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        design.setVenue(venue);
        return designRepository.save(design);
    }

    public List<PublicDesign> getDesignsByVenue(String venueName) {
        return designRepository.findByVenue_VenueName(venueName);
    }
    public PublicOrder savePrivateEventBooking(PublicOrder publicOrder){
      return publicOrderRepository.save(publicOrder);
    }
}
