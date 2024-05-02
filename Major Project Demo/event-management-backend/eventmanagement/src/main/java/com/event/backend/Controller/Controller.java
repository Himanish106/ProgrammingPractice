package com.event.backend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.backend.Entity.User;
import com.event.backend.RequestResponse.AuthenticationRequest;
import com.event.backend.RequestResponse.AuthenticationResponse;
import com.event.backend.Security.JWTHelper;
import com.event.backend.Service.EventService;

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
            responseBody.put("role",savedUser.getRole().name());
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
}