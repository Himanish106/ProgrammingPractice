package com.event.backend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.backend.Entity.User;
import com.event.backend.Entity.PrivateEventBooking.Caterer;
import com.event.backend.Entity.PrivateEventBooking.City;
import com.event.backend.Entity.PrivateEventBooking.Design;
import com.event.backend.Entity.PrivateEventBooking.EventTypes;
import com.event.backend.Entity.PrivateEventBooking.Media;
import com.event.backend.Entity.PrivateEventBooking.PrivateOrder;
import com.event.backend.Entity.PrivateEventBooking.State;
import com.event.backend.Entity.PrivateEventBooking.Venue;
import com.event.backend.RequestResponse.AuthenticationEnteredOTP;
import com.event.backend.RequestResponse.AuthenticationOTPRequest;
import com.event.backend.RequestResponse.AuthenticationRequest;
import com.event.backend.RequestResponse.AuthenticationResetPassword;
import com.event.backend.RequestResponse.AuthenticationResponse;
import com.event.backend.Security.JWTHelper;
import com.event.backend.Service.EventService;
import com.event.backend.Service.PrivateEventService;

@RequestMapping(value = "/globalcontroller")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private JWTHelper jwtHelper;

    @Autowired
    private EventService eventService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService detailsService;

    @Autowired
    private PrivateEventService privateEventService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> saveUser(@RequestBody User user) {
        try {
            User savedUser = eventService.saveUser(user);
            UserDetails userDetails = savedUser;
            String token = jwtHelper.generateToken(userDetails);
            Map<String, String> responseBody = new HashMap<>();
            responseBody.put("email", savedUser.getEmail());
            responseBody.put("firstName", savedUser.getFirstName());
            responseBody.put("role", savedUser.getRole().name());
            responseBody.put("token", token);
            return ResponseEntity.ok(responseBody);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = eventService.getUsers();
        return ResponseEntity.ok().body(users);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> loginUser(@RequestBody AuthenticationRequest request) {
        this.doAuthenticate(request.getEmail(), request.getPassword());
        UserDetails userDetails = detailsService.loadUserByUsername(request.getEmail());
        String firstName = eventService.findFirstNameByEmail(request.getEmail());
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", userDetails.getUsername());
        if (firstName != null) {
            claims.put("firstName", firstName);
        }
        String role = userDetails.getAuthorities().stream()
                .findFirst() // Assuming there's only one authority per user
                .map(GrantedAuthority::getAuthority)
                .orElse(null);
        claims.put("role", role);
        String token = this.jwtHelper.generateTokenWithClaims(claims);
        AuthenticationResponse response = new AuthenticationResponse(token, userDetails.getUsername(), firstName);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,
                password);
        try {
            authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid email or password");
        }
    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid";
    }

    @PostMapping("/otp")
    public ResponseEntity<AuthenticationEnteredOTP> sendOTP(
            @RequestBody AuthenticationOTPRequest authenticationOTPRequest) {
        boolean isEmailFound = eventService.sendOTPByEmail(authenticationOTPRequest.getEmail());
        if (isEmailFound) {
            String token = jwtHelper.generateTokenWithClaims(Map.of("email", authenticationOTPRequest.getEmail()));
            AuthenticationEnteredOTP response = new AuthenticationEnteredOTP(token);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            AuthenticationEnteredOTP response = new AuthenticationEnteredOTP(null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @PostMapping("/verifyotp")
    public ResponseEntity<String> verifyOTP(@RequestBody AuthenticationEnteredOTP enteredOTP) {
        if (eventService.verifyAndDeleteOTP(enteredOTP.getOtp())) {
            return ResponseEntity.ok("OTP verification successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
        }
    }

    @PostMapping("/resetpassword")
    public ResponseEntity<String> resetPassword(@RequestBody AuthenticationResetPassword resetPasswordRequest) {
        String token = resetPasswordRequest.getToken();
        String email = jwtHelper.getEmailFromToken(token);
        if (email == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or mismatched email in token");
        }

        // Reset the password for the email extracted from the token
        boolean passwordReset = eventService.resetPassword(email, resetPasswordRequest.getPassword());

        if (passwordReset) {
            return ResponseEntity.ok("Password reset successful");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to reset password");
        }
    }

    @PostMapping("/privateeventadd")
    public ResponseEntity<EventTypes> createEvent(@RequestBody EventTypes eventTypes) {
        EventTypes event = privateEventService.createEvents(eventTypes);
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }

    @GetMapping("/privateeventdisplay")
    public ResponseEntity<List<EventTypes>> getAllEvents() {
        List<EventTypes> events = privateEventService.getEventTypes();
        return ResponseEntity.ok().body(events);
    }

    @PutMapping("/privateevents/{eventId}")
    public ResponseEntity<EventTypes> updateEventTypes(@PathVariable Long eventId,
            @RequestBody EventTypes updatedEventTypes) {
        EventTypes eventTypes = privateEventService.getEventById(eventId);
        if (eventTypes != null) {
            eventTypes.setEventType(updatedEventTypes.getEventType());
            privateEventService.updateEvent(eventTypes);
            return ResponseEntity.ok(eventTypes);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/privateevents/{eventId}")
    public ResponseEntity<Void> deleteEvents(@PathVariable Long eventId) {
        privateEventService.deleteEvent(eventId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/states")
    public ResponseEntity<State> createState(@RequestBody State state) {
        State createdState = privateEventService.createState(state);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdState);
    }

    @GetMapping("/states")
    public ResponseEntity<List<State>> getAllStates() {
        List<State> states = privateEventService.getAllStates();
        return ResponseEntity.ok().body(states);
    }

    @PutMapping("/states/{stateId}")
    public ResponseEntity<State> updateState(@PathVariable Long stateId, @RequestBody State updatedState) {
        State state = privateEventService.getStateById(stateId);
        if (state != null) {
            state.setStateName(updatedState.getStateName());
            privateEventService.updateState(state);
            return ResponseEntity.ok(state);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/states/{stateId}")
    public ResponseEntity<Void> deleteState(@PathVariable Long stateId) {
        privateEventService.deleteState(stateId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/cities/{stateId}")
    public ResponseEntity<City> createCity(@PathVariable Long stateId, @RequestBody City city) {
        City createdCity = privateEventService.createCity(stateId, city);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }

    @GetMapping("/cities/{stateId}")
    public ResponseEntity<List<City>> getCitiesByStateId(@PathVariable Long stateId) {
        List<City> cities = privateEventService.getCitiesByState(stateId);
        return ResponseEntity.ok().body(cities);
    }

    @PutMapping("/cities/{cityId}")
    public ResponseEntity<City> updateCity(@PathVariable Long cityId, @RequestBody City updatedCity) {
        City city = privateEventService.getCityByName(cityId);
        if (city != null) {
            city.setCityName(updatedCity.getCityName());
            privateEventService.updateCity(city);
            return ResponseEntity.ok(city);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/cities/{cityId}")
    public ResponseEntity<Void> deleteCity(@PathVariable Long cityId) {
        privateEventService.deleteCity(cityId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/venues/{cityId}")
    public ResponseEntity<Venue> createVenue(@PathVariable Long cityId, @RequestBody Venue venue) {
        Venue createdVenue = privateEventService.createVenue(cityId, venue);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVenue);
    }

    @GetMapping("/venues/{cityId}")
    public ResponseEntity<List<Venue>> getVenuesByCityId(@PathVariable Long cityId) {
        List<Venue> venues = privateEventService.getVenuesByCity(cityId);
        return ResponseEntity.ok().body(venues);
    }

    @DeleteMapping("/venues/{venueId}")
    public ResponseEntity<Void> deleteVenue(@PathVariable Long venueId) {
        privateEventService.deleteVenue(venueId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/venues/{venueId}")
    public ResponseEntity<Venue> updateVenue(@PathVariable Long venueId, @RequestBody Venue updatedVenue) {
        Venue venue = privateEventService.getVenueByName(venueId);
        if (venue != null) {
            venue.setVenueName(updatedVenue.getVenueName());
            venue.setCapacity(updatedVenue.getCapacity());
            venue.setContact(updatedVenue.getContact());
            venue.setLocation(updatedVenue.getLocation());
            venue.setPrice(updatedVenue.getPrice());
            privateEventService.updateVenue(venue);
            return ResponseEntity.ok(venue);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/caterers/{venueId}")
    public ResponseEntity<Caterer> createCaterer(@PathVariable Long venueId, @RequestBody Caterer caterer) {
        Caterer createdCaterer = privateEventService.createCaterer(venueId, caterer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCaterer);
    }

    @PutMapping("/caterers/{catererId}")
    public ResponseEntity<Caterer> updateCaterer(@PathVariable Long catererId, @RequestBody Caterer updatedCaterer) {
        Caterer caterer = privateEventService.getCatererByName(catererId);
        if (caterer != null) {
            caterer.setServiceName(updatedCaterer.getServiceName());
            caterer.setPrice(updatedCaterer.getPrice());
            privateEventService.updateCaterer(caterer);
            return ResponseEntity.ok(caterer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/caterers/{venueId}")
    public ResponseEntity<List<Caterer>> getCaterersByVenueId(@PathVariable Long venueId) {
        List<Caterer> caterers = privateEventService.getCaterersByVenue(venueId);
        return ResponseEntity.ok().body(caterers);
    }

    @DeleteMapping("/caterers/{catererId}")
    public ResponseEntity<Void> deleteCaterer(@PathVariable Long catererId) {
        privateEventService.deleteCaterer(catererId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/medias/{venueId}")
    public ResponseEntity<Media> createMedia(@PathVariable Long venueId, @RequestBody Media media) {
        Media createdMedia = privateEventService.createMedia(venueId, media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

    @GetMapping("/medias/{venueId}")
    public ResponseEntity<List<Media>> getMediaByVenueId(@PathVariable Long venueId) {
        List<Media> media = privateEventService.getMediasByVenue(venueId);
        return ResponseEntity.ok().body(media);
    }

    @PutMapping("/medias/{mediaId}")
    public ResponseEntity<Media> updateMedia(@PathVariable Long mediaId, @RequestBody Media updatedMedia) {
        Media media = privateEventService.getMediaByName(mediaId);
        if (media != null) {
            media.setServiceProviderName(updatedMedia.getServiceProviderName());
            media.setPrice(updatedMedia.getPrice());
            privateEventService.updateMedia(media);
            return ResponseEntity.ok(media);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/medias/{mediaId}")
    public ResponseEntity<Void> deleteMedia(@PathVariable Long mediaId) {
        privateEventService.deleteMedia(mediaId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/designs/{venueId}")
    public ResponseEntity<Design> createMedia(@PathVariable Long venueId, @RequestBody Design design) {
        Design createdDesign = privateEventService.createDesign(venueId, design);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDesign);
    }

    @GetMapping("/designs/{venueId}")
    public ResponseEntity<List<Design>> getDesignByVenueId(@PathVariable Long venueId) {
        List<Design> designs = privateEventService.getDesignsByVenue(venueId);
        return ResponseEntity.ok().body(designs);
    }

    @PutMapping("/designs/{designId}")
    public ResponseEntity<Design> updateDesign(@PathVariable Long designId, @RequestBody Design updatedDesign) {
        Design design = privateEventService.getDesignByName(designId);
        if (design != null) {
            design.setServiceProviderName(updatedDesign.getServiceProviderName());
            design.setPrice(updatedDesign.getPrice());
            privateEventService.updateDesign(design);
            return ResponseEntity.ok(design);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/designs/{designId}")
    public ResponseEntity<Void> deleteDesign(@PathVariable Long designId) {
        privateEventService.deleteDesign(designId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/bookprivateorder")
    public ResponseEntity<PrivateOrder> privateOrder(@RequestBody PrivateOrder privateOrder) {
        PrivateOrder order = privateEventService.savePrivateEventBooking(privateOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(order);
    }
}