package com.event.backend.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
import com.event.backend.Service.SendingPDF.PDFEmailService;
import com.event.backend.Utility.PublicPDFGenerator;

import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;

@Service
public class PublicEventService {
    @Autowired
    private PublicEventTypesRepo publicEventTypesRepo;

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

    @Autowired
    private PDFEmailService pdfEmailService;

    public PublicEventTypes createPublicEvents(PublicEventTypes events) {
        return publicEventTypesRepo.save(events);
    }

    public List<PublicEventTypes> getPublicEventTypes() {
        return publicEventTypesRepo.findAll();
    }

    public PublicEventTypes getPublicEventById(Long eventId) {
        Optional<PublicEventTypes> eventOptional = publicEventTypesRepo.findById(eventId);
        return eventOptional.orElse(null);
    }

    public PublicEventTypes updatePublicEvent(PublicEventTypes eventType) {
        return publicEventTypesRepo.save(eventType);
    }

    public PublicState createPublicState(PublicState state) {
        return stateRepository.save(state);
    }

    @Transactional
    public void deletePublicEvent(Long eventId) {
        publicEventTypesRepo.deleteById(eventId);
    }

    public PublicState getPublicStateById(Long id) {
        Optional<PublicState> stateOptional = stateRepository.findById(id);
        return stateOptional.orElse(null);
    }

    public PublicState updatePublicState(PublicState state) {
        return stateRepository.save(state);
    }

    public List<PublicState> getAllPublicStates() {
        return stateRepository.findAll();
    }

    @Transactional
    public void deletePublicState(Long stateId) {
        stateRepository.deleteById(stateId);
    }

    public PublicCity createPublicCity(Long id, PublicCity city) {
        PublicState state = stateRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("State not found"));
        city.setState(state);
        return cityRepository.save(city);
    }

    public List<PublicCity> getPublicCitiesByState(Long stateName) {
        return cityRepository.findByState_StateId(stateName);
    }

    public PublicCity getPublicCityByName(Long cityId) {
        Optional<PublicCity> cityOptional = cityRepository.findById(cityId);
        return cityOptional.orElse(null);
    }

    public PublicCity updatePublicCity(PublicCity city) {
        return cityRepository.save(city);
    }

    @Transactional
    public void deletePublicCity(Long cityId) {
        cityRepository.deleteById(cityId);
    }

    public PublicVenue createPublicVenue(Long cityId, PublicVenue venue) {
        PublicCity city = cityRepository.findById(cityId)
                .orElseThrow(() -> new RuntimeException("City not found"));
        venue.setCity(city);
        return venueRepository.save(venue);
    }

    public List<PublicVenue> getPublicVenuesByCity(Long cityId) {
        return venueRepository.findByCity_CityId(cityId);
    }

    public PublicVenue getPublicVenueByName(Long venueId) {
        Optional<PublicVenue> venueOptional = venueRepository.findById(venueId);
        return venueOptional.orElse(null);
    }

    public PublicVenue updatePublicVenue(PublicVenue venue) {
        return venueRepository.save(venue);
    }

    @Transactional
    public void deletePublicVenue(Long venueId) {
        venueRepository.deleteById(venueId);
    }

    public PublicCaterer createPublicCaterer(Long venueId, PublicCaterer caterer) {
        PublicVenue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        caterer.setVenue(venue);
        return catererRepository.save(caterer);
    }

    public List<PublicCaterer> getCaterersByVenue(Long venueId) {
        return catererRepository.findByVenue_VenueId(venueId);
    }

    public PublicCaterer getPublicCatererByName(Long catererId) {
        Optional<PublicCaterer> catererOptional = catererRepository.findById(catererId);
        return catererOptional.orElse(null);
    }

    public PublicCaterer updatePublicCaterer(PublicCaterer caterer) {
        return catererRepository.save(caterer);
    }

    @Transactional
    public void deletePublicCaterer(Long catererId) {
        catererRepository.deleteById(catererId);
    }

    public PublicMedia createPublicMedia(Long venueId, PublicMedia media) {
        PublicVenue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        media.setVenue(venue);
        return mediaRepository.save(media);
    }

    public List<PublicMedia> getPublicMediasByVenue(Long venueId) {
        return mediaRepository.findByVenue_VenueId(venueId);
    }

    public PublicMedia getPublicMediaByName(Long mediaId) {
        Optional<PublicMedia> mediaOptional = mediaRepository.findById(mediaId);
        return mediaOptional.orElse(null);
    }

    public PublicMedia updatePublicMedia(PublicMedia media) {
        return mediaRepository.save(media);
    }

    @Transactional
    public void deletePublicMedia(Long mediaId) {
        mediaRepository.deleteById(mediaId);
    }

    public PublicDesign createDesign(Long venueId, PublicDesign design) {
        PublicVenue venue = venueRepository.findById(venueId)
                .orElseThrow(() -> new RuntimeException("Venue not found"));
        design.setVenue(venue);
        return designRepository.save(design);
    }

    public List<PublicDesign> getDesignsByVenue(Long venueId) {
        return designRepository.findByVenue_VenueId(venueId);
    }

    public PublicDesign getPublicDesignByName(Long designId) {
        Optional<PublicDesign> designOptional = designRepository.findById(designId);
        return designOptional.orElse(null);
    }

    public PublicDesign updatePublicDesign(PublicDesign design) {
        return designRepository.save(design);
    }

    @Transactional
    public void deletePublicDesign(Long designId) {
        designRepository.deleteById(designId);
    }

    public PublicOrder savePrivateEventBooking(PublicOrder publicOrder) {
        return publicOrderRepository.save(publicOrder);
    }

    public void handlePostPublicOrder(PublicOrder privateOrder) throws IOException, MessagingException {
        savePrivateEventBooking(privateOrder);
        byte[] pdfData = PublicPDFGenerator.generateReceiptPDF(privateOrder);
        pdfEmailService.sendEmailWithAttachment(privateOrder.getEmail(), "Your Booking Confirmation",
                "Here is your booking confirmation.", pdfData, "booking.pdf");
    }

    public List<PublicOrder> getAllPublicOrders() {
        return publicOrderRepository.findAll();
    }

    public Optional<PublicOrder> getPublicOrderById(Long id) {
        return publicOrderRepository.findById(id);
    }

    public PublicOrder savePublicOrder(PublicOrder publicOrder) {
        return publicOrderRepository.save(publicOrder);
    }



    public void deletePublicOrder(Long id) {
        publicOrderRepository.deleteById(id);
    }

    public PublicOrder addImageToPublicOrder(Long publicOrderId, MultipartFile file) throws IOException {
        Optional<PublicOrder> optionalPublicOrder = publicOrderRepository.findById(publicOrderId);
        if (optionalPublicOrder.isPresent()) {
            PublicOrder publicOrder = optionalPublicOrder.get();
            publicOrder.setData(file.getBytes());
            return publicOrderRepository.save(publicOrder);
        } else {
            throw new IllegalArgumentException("Public order not found with ID: " + publicOrderId);
        }
    }

    public PublicOrder updatePublicOrderWithImage(Long publicOrderId, MultipartFile file) throws IOException {
        Optional<PublicOrder> optionalPublicOrder = publicOrderRepository.findById(publicOrderId);
        if (optionalPublicOrder.isPresent()) {
            PublicOrder publicOrder = optionalPublicOrder.get();
            publicOrder.setData(file.getBytes());
            return publicOrderRepository.save(publicOrder);
        } else {
            throw new IllegalArgumentException("Public order not found with ID: " + publicOrderId);
        }
    }

    public PublicOrder updateTicketPrice(Long publicOrderId, double ticketPrice) {
        Optional<PublicOrder> optionalPublicOrder = publicOrderRepository.findById(publicOrderId);
        if (optionalPublicOrder.isPresent()) {
            PublicOrder publicOrder = optionalPublicOrder.get();
            publicOrder.setTicketPrice(ticketPrice);
            return publicOrderRepository.save(publicOrder);
        } else {
            throw new IllegalArgumentException("Public order not found with ID: " + publicOrderId);
        }
    }
}
