package com.event.backend.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.event.backend.Entity.PublicEventBooking.PublicCaterer;
import com.event.backend.Entity.PublicEventBooking.PublicCity;
import com.event.backend.Entity.PublicEventBooking.PublicDesign;
import com.event.backend.Entity.PublicEventBooking.PublicEventTypes;
import com.event.backend.Entity.PublicEventBooking.PublicMedia;
import com.event.backend.Entity.PublicEventBooking.PublicOrder;
import com.event.backend.Entity.PublicEventBooking.PublicState;
import com.event.backend.Entity.PublicEventBooking.PublicVenue;
import com.event.backend.Service.PublicEventService;

import jakarta.mail.MessagingException;

@RequestMapping(value = "/privateeventcontroller")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PublicEventController {

    @Autowired
    private PublicEventService publicEventService;

    @PostMapping("/publiceventadd")
    public ResponseEntity<PublicEventTypes> createPublicEvent(@RequestBody PublicEventTypes eventTypes) {
        PublicEventTypes event = publicEventService.createPublicEvents(eventTypes);
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }

    @GetMapping("/publiceventdisplay")
    public ResponseEntity<List<PublicEventTypes>> getAllEvents() {
        List<PublicEventTypes> events = publicEventService.getPublicEventTypes();
        return ResponseEntity.ok().body(events);
    }

    @PutMapping("/publicevents/{eventId}")
    public ResponseEntity<PublicEventTypes> updatePublicEventTypes(@PathVariable Long eventId,
            @RequestBody PublicEventTypes updatedPublicEventTypes) {
        PublicEventTypes eventTypes = publicEventService.getPublicEventById(eventId);
        if (eventTypes != null) {
            eventTypes.setEventType(updatedPublicEventTypes.getEventType());
            publicEventService.updatePublicEvent(eventTypes);
            return ResponseEntity.ok(eventTypes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publicevents/{eventId}")
    public ResponseEntity<Void> deletePublicEvents(@PathVariable Long eventId) {
        publicEventService.deletePublicEvent(eventId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/publicstates")
    public ResponseEntity<PublicState> createState(@RequestBody PublicState state) {
        PublicState createdState = publicEventService.createPublicState(state);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdState);
    }

    @GetMapping("/publicstates")
    public ResponseEntity<List<PublicState>> getAllStates() {
        List<PublicState> states = publicEventService.getAllPublicStates();
        return ResponseEntity.ok().body(states);
    }

    @PutMapping("/publicstates/{stateId}")
    public ResponseEntity<PublicState> updatePublicState(@PathVariable Long stateId,
            @RequestBody PublicState updatedPublicState) {
        PublicState state = publicEventService.getPublicStateById(stateId);
        if (state != null) {
            state.setStateName(updatedPublicState.getStateName());
            publicEventService.updatePublicState(state);
            return ResponseEntity.ok(state);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publicstates/{stateId}")
    public ResponseEntity<Void> deletePublicState(@PathVariable Long stateId) {
        publicEventService.deletePublicState(stateId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/publiccities/{stateId}")
    public ResponseEntity<PublicCity> createCity(@PathVariable Long stateId, @RequestBody PublicCity city) {
        PublicCity createdCity = publicEventService.createPublicCity(stateId, city);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }

    @GetMapping("/publiccities/{stateId}")
    public ResponseEntity<List<PublicCity>> getPublicCitiesByStateId(@PathVariable Long stateId) {
        List<PublicCity> cities = publicEventService.getPublicCitiesByState(stateId);
        System.out.println(cities);
        return ResponseEntity.ok().body(cities);
    }

    @PutMapping("/publiccities/{cityId}")
    public ResponseEntity<PublicCity> updatePublicCity(@PathVariable Long cityId, @RequestBody PublicCity updatedCity) {
        PublicCity city = publicEventService.getPublicCityByName(cityId);
        if (city != null) {
            city.setCityName(updatedCity.getCityName());
            publicEventService.updatePublicCity(city);
            return ResponseEntity.ok(city);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publiccities/{cityId}")
    public ResponseEntity<Void> deletePublicCity(@PathVariable Long cityId) {
        publicEventService.deletePublicCity(cityId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/publicvenues/{cityId}")
    public ResponseEntity<PublicVenue> createPublicVenue(@PathVariable Long cityId, @RequestBody PublicVenue venue) {
        PublicVenue createdVenue = publicEventService.createPublicVenue(cityId, venue);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVenue);
    }

    @GetMapping("/publicvenues/{cityId}")
    public ResponseEntity<List<PublicVenue>> getPublicVenuesByCityId(@PathVariable Long cityId) {
        List<PublicVenue> venues = publicEventService.getPublicVenuesByCity(cityId);
        return ResponseEntity.ok().body(venues);
    }

    @DeleteMapping("/publicvenues/{venueId}")
    public ResponseEntity<Void> deletePublicVenue(@PathVariable Long venueId) {
        publicEventService.deletePublicVenue(venueId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/publicvenues/{venueId}")
    public ResponseEntity<PublicVenue> updatePublicVenue(@PathVariable Long venueId,
            @RequestBody PublicVenue updatedVenue) {
        PublicVenue venue = publicEventService.getPublicVenueByName(venueId);
        if (venue != null) {
            venue.setVenueName(updatedVenue.getVenueName());
            venue.setCapacity(updatedVenue.getCapacity());
            venue.setContact(updatedVenue.getContact());
            venue.setLocation(updatedVenue.getLocation());
            venue.setPrice(updatedVenue.getPrice());
            publicEventService.updatePublicVenue(venue);
            return ResponseEntity.ok(venue);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/publiccaterers/{venueId}")
    public ResponseEntity<PublicCaterer> createPublicCaterer(@PathVariable Long venueId,
            @RequestBody PublicCaterer caterer) {
        PublicCaterer createdCaterer = publicEventService.createPublicCaterer(venueId, caterer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCaterer);
    }

    @GetMapping("/publiccaterers/{venueId}")
    public ResponseEntity<List<PublicCaterer>> getPublicCaterersByVenueId(@PathVariable Long venueId) {
        List<PublicCaterer> caterers = publicEventService.getCaterersByVenue(venueId);
        return ResponseEntity.ok().body(caterers);
    }

    @PutMapping("/publiccaterers/{catererId}")
    public ResponseEntity<PublicCaterer> updatePublicCaterer(@PathVariable Long catererId,
            @RequestBody PublicCaterer updatedCaterer) {
        PublicCaterer caterer = publicEventService.getPublicCatererByName(catererId);
        if (caterer != null) {
            caterer.setServiceName(updatedCaterer.getServiceName());
            caterer.setPrice(updatedCaterer.getPrice());
            publicEventService.updatePublicCaterer(caterer);
            return ResponseEntity.ok(caterer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publiccaterers/{catererId}")
    public ResponseEntity<Void> deletePublicCaterer(@PathVariable Long catererId) {
        publicEventService.deletePublicCaterer(catererId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/publicmedias/{venueId}")
    public ResponseEntity<PublicMedia> createMedia(@PathVariable Long venueId, @RequestBody PublicMedia media) {
        PublicMedia createdMedia = publicEventService.createPublicMedia(venueId, media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

    @GetMapping("/publicmedias/{venueId}")
    public ResponseEntity<List<PublicMedia>> getMediaByVenueId(@PathVariable Long venueId) {
        List<PublicMedia> media = publicEventService.getPublicMediasByVenue(venueId);
        return ResponseEntity.ok().body(media);
    }

    @PutMapping("/publicmedias/{mediaId}")
    public ResponseEntity<PublicMedia> updatePublicMedia(@PathVariable Long mediaId,
            @RequestBody PublicMedia updatedMedia) {
        PublicMedia media = publicEventService.getPublicMediaByName(mediaId);
        if (media != null) {
            media.setServiceProviderName(updatedMedia.getServiceProviderName());
            media.setPrice(updatedMedia.getPrice());
            publicEventService.updatePublicMedia(media);
            return ResponseEntity.ok(media);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publicmedias/{mediaId}")
    public ResponseEntity<Void> deletePublicMedia(@PathVariable Long mediaId) {
        publicEventService.deletePublicMedia(mediaId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/publicdesigns/{venueId}")
    public ResponseEntity<PublicDesign> createMedia(@PathVariable Long venueId, @RequestBody PublicDesign design) {
        PublicDesign createdDesign = publicEventService.createDesign(venueId, design);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDesign);
    }

    @GetMapping("/publicdesigns/{venueId}")
    public ResponseEntity<List<PublicDesign>> getDesignByVenueId(@PathVariable Long venueId) {
        List<PublicDesign> designs = publicEventService.getDesignsByVenue(venueId);
        return ResponseEntity.ok().body(designs);
    }

    @PutMapping("/publicdesigns/{designId}")
    public ResponseEntity<PublicDesign> updateDesign(@PathVariable Long designId,
            @RequestBody PublicDesign updatedDesign) {
        PublicDesign design = publicEventService.getPublicDesignByName(designId);
        if (design != null) {
            design.setServiceProviderName(updatedDesign.getServiceProviderName());
            design.setPrice(updatedDesign.getPrice());
            publicEventService.updatePublicDesign(design);
            return ResponseEntity.ok(design);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publicdesigns/{designId}")
    public ResponseEntity<Void> deleteDesign(@PathVariable Long designId) {
        publicEventService.deletePublicDesign(designId);
        return ResponseEntity.noContent().build();
    }


    @PostMapping("/bookpublicorder")
    public ResponseEntity<PublicOrder> publicOrder(@RequestBody PublicOrder publicOrder) {
        try{
            publicEventService.handlePostPublicOrder(publicOrder);
            return ResponseEntity.status(HttpStatus.CREATED).body(publicOrder);
        }
        catch(IOException | MessagingException e){
            e.printStackTrace();
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
       

    @GetMapping("/allorder")
    public ResponseEntity<List<PublicOrder>> getAllPublicOrders() {
        List<PublicOrder> publicOrders = publicEventService.getAllPublicOrders();
        return new ResponseEntity<>(publicOrders, HttpStatus.OK);
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<PublicOrder> getPublicOrderById(@PathVariable Long id) {
        Optional<PublicOrder> optionalPublicOrder = publicEventService.getPublicOrderById(id);
        return optionalPublicOrder.map(publicOrder -> new ResponseEntity<>(publicOrder, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("deleteorder/{id}")
    public ResponseEntity<Void> deletePublicOrder(@PathVariable Long id) {
        publicEventService.deletePublicOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{publicOrderId}/image")
    public ResponseEntity<PublicOrder> addImageToPublicOrder(
            @PathVariable Long publicOrderId,
            @RequestParam("file") MultipartFile file) throws IOException {
        PublicOrder updatedPublicOrder = publicEventService.addImageToPublicOrder(publicOrderId, file);
        return new ResponseEntity<>(updatedPublicOrder, HttpStatus.OK);
    }

    @PutMapping("/{publicOrderId}/image")
    public ResponseEntity<PublicOrder> updatePublicOrderWithImage(
            @PathVariable Long publicOrderId,
            @RequestParam("file") MultipartFile file) throws IOException {
        PublicOrder updatedPublicOrder = publicEventService.updatePublicOrderWithImage(publicOrderId, file);
        return new ResponseEntity<>(updatedPublicOrder, HttpStatus.OK);
    }

    @PutMapping("/{publicOrderId}/ticketprice")
    public ResponseEntity<PublicOrder> updateTicketPrice(
            @PathVariable Long publicOrderId,
            @RequestParam("ticket") double ticket) {
        PublicOrder updatedPublicOrder = publicEventService.updateTicketPrice(publicOrderId, ticket);
        return new ResponseEntity<>(updatedPublicOrder, HttpStatus.OK);
    }
}