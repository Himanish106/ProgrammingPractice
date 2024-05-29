package com.event.backend.Controller;

import java.io.IOException;
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
import com.event.backend.Entity.PrivateEventBooking.PrivateCaterer;
import com.event.backend.Entity.PrivateEventBooking.PrivateCity;
import com.event.backend.Entity.PrivateEventBooking.PrivateDesign;
import com.event.backend.Entity.PrivateEventBooking.PrivateEventTypes;
import com.event.backend.Entity.PrivateEventBooking.PrivateMedia;
import com.event.backend.Entity.PrivateEventBooking.PrivateOrder;
import com.event.backend.Entity.PrivateEventBooking.PrivateState;
import com.event.backend.Entity.PrivateEventBooking.PrivateVenue;
import com.event.backend.RequestResponse.AuthenticationEnteredOTP;
import com.event.backend.RequestResponse.AuthenticationOTPRequest;
import com.event.backend.RequestResponse.AuthenticationRequest;
import com.event.backend.RequestResponse.AuthenticationResetPassword;
import com.event.backend.RequestResponse.AuthenticationResponse;
import com.event.backend.Security.JWTHelper;
import com.event.backend.Service.EventService;
import com.event.backend.Service.PrivateEventService;

import jakarta.mail.MessagingException;

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
            responseBody.put("lastName", savedUser.getLastName());
            responseBody.put("contact", savedUser.getContact().toString());
            responseBody.put("role", savedUser.getRole().name());
            responseBody.put("token", token);
            return ResponseEntity.ok(responseBody);
        } catch (RuntimeException e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
    }

    @PutMapping("/users/{email}")
    public ResponseEntity<Map<String, String>> updateUser(
            @PathVariable String email, @RequestBody User updatedUser) {
        try {
            User savedUser = eventService.updateUser(email, updatedUser);
            Map<String, String> responseBody = new HashMap<>();
            responseBody.put("id", savedUser.getId());
            responseBody.put("email", savedUser.getEmail());
            responseBody.put("firstName", savedUser.getFirstName());
            responseBody.put("lastName", savedUser.getLastName());
            responseBody.put("contact", savedUser.getContact().toString());
            responseBody.put("role", savedUser.getRole().name());
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
        String lastName = eventService.findLastNameByEmail(request.getEmail());
        Long contact = eventService.findContactByEmail(request.getEmail());
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", userDetails.getUsername());
        if (firstName != null && lastName != null && contact != null) {
            claims.put("firstName", firstName);
            claims.put("lastName", lastName);
            claims.put("contact", contact);
        }
        String role = userDetails.getAuthorities().stream()
                .findFirst()
                .map(GrantedAuthority::getAuthority)
                .orElse(null);
        claims.put("role", role);
        String token = this.jwtHelper.generateTokenWithClaims(claims);
        AuthenticationResponse response = new AuthenticationResponse(token, userDetails.getUsername(), firstName,
                lastName, contact);
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
        boolean passwordReset = eventService.resetPassword(email, resetPasswordRequest.getPassword());

        if (passwordReset) {
            return ResponseEntity.ok("Password reset successful");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to reset password");
        }
    }

    @PostMapping("/privateeventadd")
    public ResponseEntity<PrivateEventTypes> createEvent(@RequestBody PrivateEventTypes eventTypes) {
        PrivateEventTypes event = privateEventService.createEvents(eventTypes);
        return ResponseEntity.status(HttpStatus.CREATED).body(event);
    }

    @GetMapping("/privateeventdisplay")
    public ResponseEntity<List<PrivateEventTypes>> getAllEvents() {
        List<PrivateEventTypes> events = privateEventService.getEventTypes();
        return ResponseEntity.ok().body(events);
    }

    @PutMapping("/privateevents/{eventId}")
    public ResponseEntity<PrivateEventTypes> updateEventTypes(@PathVariable Long eventId,
            @RequestBody PrivateEventTypes updatedEventTypes) {
        PrivateEventTypes eventTypes = privateEventService.getEventById(eventId);
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
    public ResponseEntity<PrivateState> createState(@RequestBody PrivateState state) {
        PrivateState createdState = privateEventService.createState(state);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdState);
    }

    @GetMapping("/states")
    public ResponseEntity<List<PrivateState>> getAllStates() {
        List<PrivateState> states = privateEventService.getAllStates();
        return ResponseEntity.ok().body(states);
    }

    @PutMapping("/states/{stateId}")
    public ResponseEntity<PrivateState> updateState(@PathVariable Long stateId, @RequestBody PrivateState updatedState) {
        PrivateState state = privateEventService.getStateById(stateId);
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
    public ResponseEntity<PrivateCity> createCity(@PathVariable Long stateId, @RequestBody PrivateCity city) {
        PrivateCity createdCity = privateEventService.createCity(stateId, city);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }

    @GetMapping("/cities/{stateId}")
    public ResponseEntity<List<PrivateCity>> getCitiesByStateId(@PathVariable Long stateId) {
        List<PrivateCity> cities = privateEventService.getCitiesByState(stateId);
        return ResponseEntity.ok().body(cities);
    }

    @PutMapping("/cities/{cityId}")
    public ResponseEntity<PrivateCity> updateCity(@PathVariable Long cityId, @RequestBody PrivateCity updatedCity) {
        PrivateCity city = privateEventService.getCityByName(cityId);
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
    public ResponseEntity<PrivateVenue> createVenue(@PathVariable Long cityId, @RequestBody PrivateVenue venue) {
        PrivateVenue createdVenue = privateEventService.createVenue(cityId, venue);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVenue);
    }

    @GetMapping("/venues/{cityId}")
    public ResponseEntity<List<PrivateVenue>> getVenuesByCityId(@PathVariable Long cityId) {
        List<PrivateVenue> venues = privateEventService.getVenuesByCity(cityId);
        return ResponseEntity.ok().body(venues);
    }

    @DeleteMapping("/venues/{venueId}")
    public ResponseEntity<Void> deleteVenue(@PathVariable Long venueId) {
        privateEventService.deleteVenue(venueId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/venues/{venueId}")
    public ResponseEntity<PrivateVenue> updateVenue(@PathVariable Long venueId, @RequestBody PrivateVenue updatedVenue) {
        PrivateVenue venue = privateEventService.getVenueByName(venueId);
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
    public ResponseEntity<PrivateCaterer> createCaterer(@PathVariable Long venueId, @RequestBody PrivateCaterer caterer) {
        PrivateCaterer createdCaterer = privateEventService.createCaterer(venueId, caterer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCaterer);
    }

    @PutMapping("/caterers/{catererId}")
    public ResponseEntity<PrivateCaterer> updateCaterer(@PathVariable Long catererId, @RequestBody PrivateCaterer updatedCaterer) {
        PrivateCaterer caterer = privateEventService.getCatererByName(catererId);
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
    public ResponseEntity<List<PrivateCaterer>> getCaterersByVenueId(@PathVariable Long venueId) {
        List<PrivateCaterer> caterers = privateEventService.getCaterersByVenue(venueId);
        return ResponseEntity.ok().body(caterers);
    }

    @DeleteMapping("/caterers/{catererId}")
    public ResponseEntity<Void> deleteCaterer(@PathVariable Long catererId) {
        privateEventService.deleteCaterer(catererId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/medias/{venueId}")
    public ResponseEntity<PrivateMedia> createMedia(@PathVariable Long venueId, @RequestBody PrivateMedia media) {
        PrivateMedia createdMedia = privateEventService.createMedia(venueId, media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

    @GetMapping("/medias/{venueId}")
    public ResponseEntity<List<PrivateMedia>> getMediaByVenueId(@PathVariable Long venueId) {
        List<PrivateMedia> media = privateEventService.getMediasByVenue(venueId);
        return ResponseEntity.ok().body(media);
    }

    @PutMapping("/medias/{mediaId}")
    public ResponseEntity<PrivateMedia> updateMedia(@PathVariable Long mediaId, @RequestBody PrivateMedia updatedMedia) {
        PrivateMedia media = privateEventService.getMediaByName(mediaId);
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
    public ResponseEntity<PrivateDesign> createMedia(@PathVariable Long venueId, @RequestBody PrivateDesign design) {
        PrivateDesign createdDesign = privateEventService.createDesign(venueId, design);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDesign);
    }

    @GetMapping("/designs/{venueId}")
    public ResponseEntity<List<PrivateDesign>> getDesignByVenueId(@PathVariable Long venueId) {
        List<PrivateDesign> designs = privateEventService.getDesignsByVenue(venueId);
        return ResponseEntity.ok().body(designs);
    }

    @PutMapping("/designs/{designId}")
    public ResponseEntity<PrivateDesign> updateDesign(@PathVariable Long designId, @RequestBody PrivateDesign updatedDesign) {
        PrivateDesign design = privateEventService.getDesignByName(designId);
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
        try{
            privateEventService.handlePostPrivateOrder(privateOrder);
            return ResponseEntity.status(HttpStatus.CREATED).body(privateOrder);
        }
        catch(IOException | MessagingException e){
            e.printStackTrace();
             return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/allorder")
    public ResponseEntity<List<PrivateOrder>> getAllPrivateOrders() {
        List<PrivateOrder> privateOrders = privateEventService.getAllPrivateOrders();
        return new ResponseEntity<>(privateOrders, HttpStatus.OK);
    }

    @DeleteMapping("deleteorder/{id}")
    public ResponseEntity<Void> deletePrivateOrder(@PathVariable Long id) {
        privateEventService.deletePrivateOrder(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}