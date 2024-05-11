package com.link.tables.linktables.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.link.tables.linktables.Entities.Caterer;
import com.link.tables.linktables.Entities.City;
import com.link.tables.linktables.Entities.Media;
import com.link.tables.linktables.Entities.State;
import com.link.tables.linktables.Entities.Venue;
import com.link.tables.linktables.Services.EntityService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class EntityController {

    @Autowired
    private EntityService entityService;

    @PostMapping("/states")
    public ResponseEntity<State> createState(@RequestBody State state) {
        State createdState = entityService.createState(state);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdState);
    }

    @PostMapping("/cities/{stateId}")
    public ResponseEntity<City> createCity(@PathVariable Long stateId, @RequestBody City city) {
        City createdCity = entityService.createCity(stateId, city);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }

    @PostMapping("/venues/{cityId}")
    public ResponseEntity<Venue> createVenue(@PathVariable Long cityId, @RequestBody Venue venue) {
        Venue createdVenue = entityService.createVenue(cityId, venue);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVenue);
    }

    @PostMapping("/caterers/{venueId}")
    public ResponseEntity<Caterer> createCaterer(@PathVariable Long venueId, @RequestBody Caterer caterer) {
        Caterer createdCaterer = entityService.createCaterer(venueId, caterer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCaterer);
    }

    @PostMapping("/medias/{venueId}")
    public ResponseEntity<Media> createMedia(@PathVariable Long venueId, @RequestBody Media media) {
        Media createdMedia = entityService.createMedia(venueId, media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

     @GetMapping("/states")
    public ResponseEntity<List<State>> getAllStates() {
        List<State> states = entityService.getAllStates();
        return ResponseEntity.ok().body(states);
    }


    @GetMapping("/cities/{stateId}")
    public ResponseEntity<List<City>> getCitiesByStateId(@PathVariable Long stateId) {
        List<City> cities = entityService.getCitiesByStateId(stateId);
        System.out.println(cities);
        return ResponseEntity.ok().body(cities);
    }


    @GetMapping("/venues/{cityId}")
    public ResponseEntity<List<Venue>> getVenuesByCityId(@PathVariable Long cityId) {
        List<Venue> venues = entityService.getVenuesByCityId(cityId);
        return ResponseEntity.ok().body(venues);
    }


    @GetMapping("/medias/{venueId}")
    public ResponseEntity<List<Media>> getMediaByVenueId(@PathVariable Long venueId) {
        List<Media> media = entityService.getMediaByVenueId(venueId);
        return ResponseEntity.ok().body(media);
    }


    @GetMapping("/caterers/{venueId}")
    public ResponseEntity<List<Caterer>> getCaterersByVenueId(@PathVariable Long venueId) {
        List<Caterer> caterers = entityService.getCaterersByVenueId(venueId);
        return ResponseEntity.ok().body(caterers);
    }
}