package com.event.backend.Controller;

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

import com.event.backend.Entity.PublicEventBooking.PublicCaterer;
import com.event.backend.Entity.PublicEventBooking.PublicCity;
import com.event.backend.Entity.PublicEventBooking.PublicDesign;
import com.event.backend.Entity.PublicEventBooking.PublicEventTypes;
import com.event.backend.Entity.PublicEventBooking.PublicMedia;
import com.event.backend.Entity.PublicEventBooking.PublicOrder;
import com.event.backend.Entity.PublicEventBooking.PublicState;
import com.event.backend.Entity.PublicEventBooking.PublicVenue;
import com.event.backend.Service.PublicEventService;


@RequestMapping(value = "/privateeventcontroller")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PublicEventController {

    @Autowired
    private PublicEventService publicEventService;

    @PostMapping("/publiceventadd")
    public ResponseEntity<PublicEventTypes> createPublicEvent(@RequestBody PublicEventTypes eventTypes) {
        PublicEventTypes event = publicEventService.createEvents(eventTypes);
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }

    @GetMapping("/publiceventdisplay")
    public ResponseEntity<List<PublicEventTypes>> getAllEvents() {
        List<PublicEventTypes> events = publicEventService.getEventTypes();
        return ResponseEntity.ok().body(events);
    }

    @PostMapping("/states")
    public ResponseEntity<PublicState> createState(@RequestBody PublicState state) {
        PublicState createdState = publicEventService.createState(state);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdState);
    }

    @GetMapping("/states")
    public ResponseEntity<List<PublicState>> getAllStates() {
        List<PublicState> states = publicEventService.getAllStates();
        return ResponseEntity.ok().body(states);
    }

    @PostMapping("/cities/{stateName}")
    public ResponseEntity<PublicCity> createCity(@PathVariable String stateName, @RequestBody PublicCity city) {
        PublicCity createdCity = publicEventService.createCity(stateName, city);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }

    @GetMapping("/cities/{stateName}")
    public ResponseEntity<List<PublicCity>> getCitiesByStateId(@PathVariable String stateName) {
        List<PublicCity> cities = publicEventService.getCitiesByState(stateName);
        System.out.println(cities);
        return ResponseEntity.ok().body(cities);
    }

    @PostMapping("/venues/{cityName}")
    public ResponseEntity<PublicVenue> createVenue(@PathVariable String cityName, @RequestBody PublicVenue venue) {
        PublicVenue createdVenue = publicEventService.createVenue(cityName, venue);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVenue);
    }

    @GetMapping("/venues/{cityName}")
    public ResponseEntity<List<PublicVenue>> getVenuesByCityId(@PathVariable String cityName) {
        List<PublicVenue> venues = publicEventService.getVenuesByCity(cityName);
        return ResponseEntity.ok().body(venues);
    }

    @PostMapping("/caterers/{venueName}")
    public ResponseEntity<PublicCaterer> createCaterer(@PathVariable String venueName, @RequestBody PublicCaterer caterer) {
        PublicCaterer createdCaterer = publicEventService.createCaterer(venueName, caterer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCaterer);
    }

    @GetMapping("/caterers/{venueName}")
    public ResponseEntity<List<PublicCaterer>> getCaterersByVenueId(@PathVariable String venueName) {
        List<PublicCaterer> caterers = publicEventService.getCaterersByVenue(venueName);
        return ResponseEntity.ok().body(caterers);
    }

    @PostMapping("/medias/{venueName}")
    public ResponseEntity<PublicMedia> createMedia(@PathVariable String venueName, @RequestBody PublicMedia media) {
        PublicMedia createdMedia = publicEventService.createMedia(venueName, media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

    @GetMapping("/medias/{venueName}")
    public ResponseEntity<List<PublicMedia>> getMediaByVenueId(@PathVariable String venueName) {
        List<PublicMedia> media = publicEventService.getMediasByVenue(venueName);
        return ResponseEntity.ok().body(media);
    }

    @PostMapping("/designs/{venueName}")
    public ResponseEntity<PublicDesign> createMedia(@PathVariable String venueName, @RequestBody PublicDesign design) {
        PublicDesign createdDesign = publicEventService.createDesign(venueName, design);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDesign);
    }

    @GetMapping("/designs/{venueName}")
    public ResponseEntity<List<PublicDesign>> getDesignByVenueId(@PathVariable String venueName) {
        List<PublicDesign> designs = publicEventService.getDesignsByVenue(venueName);
        return ResponseEntity.ok().body(designs);
    }

    @PostMapping("/bookpublicorder")
    public ResponseEntity<PublicOrder> privateOrder(@RequestBody PublicOrder publicOrder) {
        PublicOrder order = publicEventService.savePrivateEventBooking(publicOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(order);
    }
}
