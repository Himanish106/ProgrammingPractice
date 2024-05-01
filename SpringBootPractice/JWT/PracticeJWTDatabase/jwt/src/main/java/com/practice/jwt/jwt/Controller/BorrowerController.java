package com.practice.jwt.jwt.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.jwt.jwt.LibraryEntity.User;
import com.practice.jwt.jwt.LibraryRepository.LibraryRepository;
import com.practice.jwt.jwt.LibraryService.LibraryService;
import com.practice.jwt.jwt.RequestResponse.AuthenticationRequest;
import com.practice.jwt.jwt.RequestResponse.AuthenticationResponse;
import com.practice.jwt.jwt.Security.JWTHelper;

@RestController
@RequestMapping("/borrower")
public class BorrowerController {

    @Autowired
    private LibraryService libraryService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService detailsService;

    @Autowired
    private JWTHelper jwtHelper;

    @Autowired
    private LibraryRepository libraryRepository;


    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> saveBorrower(@RequestBody User borrower) {
        // return ResponseEntity.ok(libraryService.saveBorrower(borrower));
        libraryService.saveBorrower(borrower);
        UserDetails userDetails = borrower;
        String token = jwtHelper.generateToken(userDetails);
                // Prepare response body with email and token
        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("email", borrower.getEmail());
        responseBody.put("token", token);

        // Return ResponseEntity with response body and HttpStatus.OK
        return ResponseEntity.ok(responseBody);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> loginUser(@RequestBody AuthenticationRequest request) {
        this.doAuthenticate(request.getEmail(), request.getPassword());
        UserDetails userDetails = detailsService.loadUserByUsername(request.getEmail());
        String token = this.jwtHelper.generateToken(userDetails);
        // AuthenticationResponse response = AuthenticationResponse.builder().jwt(token)
        //         .username(userDetails.getUsername()).build();
        // AuthenticationResponse responseRefresh = AuthenticationResponse.builder().jwt(refreshToken)
        //         .username(userDetails.getUsername()).build();
        AuthenticationResponse response=new AuthenticationResponse(token, userDetails.getUsername());
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
