package com.demo.springjwt.jwt.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AppConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        // UserDetailsService is an interface provided by Spring Security to retrieve
        // user-related data. It is a crucial part of Spring Security’s authentication
        // mechanism. When a user tries to authenticate, Spring Security calls the
        // loadUserByUsername() method of the UserDetailsService to retrieve the user's
        // details and verify the credentials.

        PasswordEncoder passwordEncoder = passwordEncoder();
        UserDetails user1 = User.builder().username("harsh").password(passwordEncoder.encode("12345")).roles("ADMIN")
                .build();
        UserDetails user2 = User.builder().username("rachit").password(passwordEncoder.encode("67891")).roles("ADMIN")
                .build();
        // The User class is part of the Spring Security framework and provides a simple
        // way to represent user details. It is typically used to create a UserDetails
        // object during the authentication process.

        // Key Properties:
        // Username: The username of the user.
        // Password: The password of the user (encoded).
        // Authorities: A collection of granted authorities (roles) for the user.
        return new InMemoryUserDetailsManager(user1, user2);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean // Used for Login Process
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }
}
