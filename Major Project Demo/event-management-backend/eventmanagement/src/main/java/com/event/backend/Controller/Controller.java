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
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
            // Attempt to save the user
            User savedUser = eventService.saveUser(user);

            // If user is successfully saved, generate token and return response
            UserDetails userDetails = savedUser;
            String token = jwtHelper.generateToken(userDetails);
            Map<String, String> responseBody = new HashMap<>();
            responseBody.put("email", savedUser.getEmail());
            responseBody.put("firstName", savedUser.getFirstName());
            responseBody.put("role", savedUser.getRole().name());
            responseBody.put("token", token);
            return ResponseEntity.ok(responseBody);
        } catch (RuntimeException e) {
            // If an exception occurs (e.g., user already exists), return error response
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
        }
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

    @PostMapping("/cities/{stateName}")
    public ResponseEntity<City> createCity(@PathVariable String stateName, @RequestBody City city) {
        City createdCity = privateEventService.createCity(stateName, city);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCity);
    }

    @GetMapping("/cities/{stateName}")
    public ResponseEntity<List<City>> getCitiesByStateId(@PathVariable String stateName) {
        List<City> cities = privateEventService.getCitiesByState(stateName);
        System.out.println(cities);
        return ResponseEntity.ok().body(cities);
    }

    @PostMapping("/venues/{cityName}")
    public ResponseEntity<Venue> createVenue(@PathVariable String cityName, @RequestBody Venue venue) {
        Venue createdVenue = privateEventService.createVenue(cityName, venue);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdVenue);
    }

    @GetMapping("/venues/{cityName}")
    public ResponseEntity<List<Venue>> getVenuesByCityId(@PathVariable String cityName) {
        List<Venue> venues = privateEventService.getVenuesByCity(cityName);
        return ResponseEntity.ok().body(venues);
    }

    @PostMapping("/caterers/{venueName}")
    public ResponseEntity<Caterer> createCaterer(@PathVariable String venueName, @RequestBody Caterer caterer) {
        Caterer createdCaterer = privateEventService.createCaterer(venueName, caterer);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCaterer);
    }

    @GetMapping("/caterers/{venueName}")
    public ResponseEntity<List<Caterer>> getCaterersByVenueId(@PathVariable String venueName) {
        List<Caterer> caterers = privateEventService.getCaterersByVenue(venueName);
        return ResponseEntity.ok().body(caterers);
    }

    @PostMapping("/medias/{venueName}")
    public ResponseEntity<Media> createMedia(@PathVariable String venueName, @RequestBody Media media) {
        Media createdMedia = privateEventService.createMedia(venueName, media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

    @GetMapping("/medias/{venueName}")
    public ResponseEntity<List<Media>> getMediaByVenueId(@PathVariable String venueName) {
        List<Media> media = privateEventService.getMediasByVenue(venueName);
        return ResponseEntity.ok().body(media);
    }

    @PostMapping("/designs/{venueName}")
    public ResponseEntity<Design> createMedia(@PathVariable String venueName, @RequestBody Design design) {
        Design createdDesign = privateEventService.createDesign(venueName, design);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdDesign);
    }

    @GetMapping("/designs/{venueName}")
    public ResponseEntity<List<Design>> getDesignByVenueId(@PathVariable String venueName) {
        List<Design> designs = privateEventService.getDesignsByVenue(venueName);
        return ResponseEntity.ok().body(designs);
    }

    @PostMapping("/bookprivateorder")
    public ResponseEntity<PrivateOrder> privateOrder(@RequestBody PrivateOrder privateOrder) {
        PrivateOrder order = privateEventService.savePrivateEventBooking(privateOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(order);
    }
}