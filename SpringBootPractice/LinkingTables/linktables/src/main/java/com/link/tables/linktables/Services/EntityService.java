package com.link.tables.linktables.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.link.tables.linktables.Entities.Caterer;
import com.link.tables.linktables.Entities.City;
import com.link.tables.linktables.Entities.Media;
import com.link.tables.linktables.Entities.State;
import com.link.tables.linktables.Entities.Venue;
import com.link.tables.linktables.Repositories.CatererRepository;
import com.link.tables.linktables.Repositories.CityRepository;
import com.link.tables.linktables.Repositories.MediaRepository;
import com.link.tables.linktables.Repositories.StateRepository;
import com.link.tables.linktables.Repositories.VenueRepository;

@Service
public class EntityService {

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

    public State createState(State state) {
        return stateRepository.save(state);
    }

    public City createCity(Long stateId, City city) {
        State state = stateRepository.findById(stateId)
                .orElseThrow(() -> new RuntimeException("State not found"));
        city.setState(state);
        return cityRepository.save(city);
    }

    public Venue createVenue(Long cityId, Venue venue) {
        City city = cityRepository.findById(cityId)
                .orElseThrow(() -> new RuntimeException("City not found"));
        venue.setCity(city);
        return venueRepository.save(venue);
    }

    public Caterer createCaterer(Long venueId, Caterer caterer) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        caterer.setVenue(venue);
        return catererRepository.save(caterer);
    }

    public Media createMedia(Long venueId, Media media) {
        Venue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        media.setVenue(venue);
        return mediaRepository.save(media);
    }


    public List<State> getAllStates() {
        return stateRepository.findAll();
    }


    public List<City> getCitiesByStateId(Long stateId) {
        return cityRepository.findByState_StateId(stateId);
    }


    public List<Venue> getVenuesByCityId(Long cityId) {
        return venueRepository.findByCity_CityId(cityId);
    }


    public List<Media> getMediaByVenueId(Long venueId) {
        return mediaRepository.findByVenue_VenueId(venueId);
    }


    public List<Caterer> getCaterersByVenueId(Long venueId) {
        return catererRepository.findByVenue_VenueId(venueId);
    }
}
