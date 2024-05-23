package com.event.backend.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.event.backend.Entity.PrivateEventBooking.PrivateCaterer;
import com.event.backend.Entity.PrivateEventBooking.PrivateCity;
import com.event.backend.Entity.PrivateEventBooking.PrivateDesign;
import com.event.backend.Entity.PrivateEventBooking.PrivateEventTypes;
import com.event.backend.Entity.PrivateEventBooking.PrivateMedia;
import com.event.backend.Entity.PrivateEventBooking.PrivateOrder;
import com.event.backend.Entity.PrivateEventBooking.PrivateState;
import com.event.backend.Entity.PrivateEventBooking.PrivateVenue;
import com.event.backend.EventRepository.PrivateEventRepository.CatererRepository;
import com.event.backend.EventRepository.PrivateEventRepository.CityRepository;
import com.event.backend.EventRepository.PrivateEventRepository.DesignRepository;
import com.event.backend.EventRepository.PrivateEventRepository.EventTypesRepo;
import com.event.backend.EventRepository.PrivateEventRepository.MediaRepository;
import com.event.backend.EventRepository.PrivateEventRepository.PrivateOrderRepository;
import com.event.backend.EventRepository.PrivateEventRepository.StateRepository;
import com.event.backend.EventRepository.PrivateEventRepository.VenueRepository;
import com.event.backend.Service.SendingPDF.PDFEmailService;
import com.event.backend.Utility.PrivatePDFGenerator;

import jakarta.mail.MessagingException;
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

    @Autowired
    private PDFEmailService pdfEmailService;

    public PrivateEventTypes createEvents(PrivateEventTypes events) {
        return privateEventRepo.save(events);
    }

    public List<PrivateEventTypes> getEventTypes() {
        return privateEventRepo.findAll();
    }

    public PrivateEventTypes getEventById(Long eventId) {
        Optional<PrivateEventTypes> eventOptional = privateEventRepo.findById(eventId);
        return eventOptional.orElse(null);
    }

    public PrivateEventTypes updateEvent(PrivateEventTypes eventType) {
        return privateEventRepo.save(eventType);
    }

    @Transactional
    public void deleteEvent(Long eventId) {
        privateEventRepo.deleteById(eventId);
    }

    public PrivateState createState(PrivateState state) {
        return stateRepository.save(state);
    }

    public PrivateState getStateById(Long id) {
        Optional<PrivateState> stateOptional = stateRepository.findById(id);
        return stateOptional.orElse(null);
    }

    public PrivateState updateState(PrivateState state) {
        return stateRepository.save(state);
    }

    public List<PrivateState> getAllStates() {
        return stateRepository.findAll();
    }

    @Transactional
    public void deleteState(Long stateId) {
        stateRepository.deleteById(stateId);
    }

    public PrivateCity createCity(Long id, PrivateCity city) {
        PrivateState state = stateRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("State not found"));
        city.setState(state);
        return cityRepository.save(city);
    }

    public PrivateCity getCityByName(Long cityId) {
        Optional<PrivateCity> cityOptional = cityRepository.findById(cityId);
        return cityOptional.orElse(null);
    }

    public PrivateCity updateCity(PrivateCity city) {
        return cityRepository.save(city);
    }

    public List<PrivateCity> getCitiesByState(Long stateName) {
        return cityRepository.findByState_StateId(stateName);
    }

    @Transactional
    public void deleteCity(Long cityId) {
        cityRepository.deleteById(cityId);
    }

    public PrivateVenue createVenue(Long cityId, PrivateVenue venue) {
        PrivateCity city = cityRepository.findById(cityId)
                .orElseThrow(() -> new RuntimeException("City not found"));
        venue.setCity(city);
        return venueRepository.save(venue);
    }

    public List<PrivateVenue> getVenuesByCity(Long cityName) {
        return venueRepository.findByCity_CityId(cityName);
    }

    public PrivateVenue getVenueByName(Long venueId) {
        Optional<PrivateVenue> venueOptional = venueRepository.findById(venueId);
        return venueOptional.orElse(null);
    }

    public PrivateVenue updateVenue(PrivateVenue venue) {
        return venueRepository.save(venue);
    }

    @Transactional
    public void deleteVenue(Long venueId) {
        venueRepository.deleteById(venueId);
    }

    public PrivateCaterer createCaterer(Long venueId, PrivateCaterer caterer) {
        PrivateVenue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        caterer.setVenue(venue);
        return catererRepository.save(caterer);
    }

    public List<PrivateCaterer> getCaterersByVenue(Long venueName) {
        return catererRepository.findByVenue_VenueId(venueName);
    }

    public PrivateCaterer getCatererByName(Long catererId) {
        Optional<PrivateCaterer> catererOptional = catererRepository.findById(catererId);
        return catererOptional.orElse(null);
    }

    public PrivateCaterer updateCaterer(PrivateCaterer caterer) {
        return catererRepository.save(caterer);
    }

    @Transactional
    public void deleteCaterer(Long catererId) {
        catererRepository.deleteById(catererId);
    }

    public PrivateMedia createMedia(Long venueId, PrivateMedia media) {
        PrivateVenue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        media.setVenue(venue);
        return mediaRepository.save(media);
    }

    public List<PrivateMedia> getMediasByVenue(Long venueName) {
        return mediaRepository.findByVenue_VenueId(venueName);
    }

    public PrivateMedia getMediaByName(Long mediaId) {
        Optional<PrivateMedia> mediaOptional = mediaRepository.findById(mediaId);
        return mediaOptional.orElse(null);
    }

    public PrivateMedia updateMedia(PrivateMedia media) {
        return mediaRepository.save(media);
    }

    @Transactional
    public void deleteMedia(Long mediaId) {
        mediaRepository.deleteById(mediaId);
    }

    public PrivateDesign createDesign(Long venueId, PrivateDesign design) {
        PrivateVenue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        design.setVenue(venue);
        return designRepository.save(design);
    }

    public List<PrivateDesign> getDesignsByVenue(Long venueName) {
        return designRepository.findByVenue_VenueId(venueName);
    }

    public PrivateDesign getDesignByName(Long designId) {
        Optional<PrivateDesign> designOptional = designRepository.findById(designId);
        return designOptional.orElse(null);
    }

    public PrivateDesign updateDesign(PrivateDesign design) {
        return designRepository.save(design);
    }

    @Transactional
    public void deleteDesign(Long designId) {
        designRepository.deleteById(designId);
    }

    public PrivateOrder savePrivateEventBooking(PrivateOrder privateOrder) {
        return privateOrderRepository.save(privateOrder);
    }

    public void handlePostPrivateOrder(PrivateOrder privateOrder) throws IOException, MessagingException {
        savePrivateEventBooking(privateOrder);
        byte[] pdfData = PrivatePDFGenerator.generateReceiptPDF(privateOrder);
        pdfEmailService.sendEmailWithAttachment(privateOrder.getEmail(), "Your Booking Confirmation",
                "Here is your booking confirmation.", pdfData, "booking.pdf");
    }

    @Transactional
    public void deletePrivateOrder(Long id) {
        privateOrderRepository.deleteById(id);
    }

    public List<PrivateOrder> getAllPrivateOrders() {
        return privateOrderRepository.findAll();
    }
}
