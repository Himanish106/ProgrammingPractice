package com.demo.springjwt.jwt.Security;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    private Logger logger = LoggerFactory.getLogger(OncePerRequestFilter.class);
    @Autowired
    private JWTHelper jwtHelper;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        // try {
        // Thread.sleep(500);
        // } catch (InterruptedException e) {
        // throw new RuntimeException(e);
        // }
        // Authorization

        String requestHeader = request.getHeader("Authorization"); // This line of code retrieves the value of the "Authorization" header from the incoming HTTP request. In the context of JWT (JSON Web Token) authentication, the Authorization header is where the JWT token is typically passed from the client to the server.
        // Bearer 2352345235sdfrsfgsdfsdf
        logger.info(" Header :  {}", requestHeader); // This line of code logs the value of the requestHeader variable to the console or log file.
        // logger.info: This is used to log an informational message.
//       " Header : {}": This is the log message template. The {} is a placeholder where the value of requestHeader will be inserted.
// requestHeader: This is the actual value that will be logged.
        String username = null;
        String token = null;
        if (requestHeader != null && requestHeader.startsWith("Bearer")) {
            // looking good
            token = requestHeader.substring(7);
        //     requestHeader.substring(7): This method call extracts a substring from the requestHeader string starting from the 7th character.
        //    Bearer : The Authorization header typically starts with the word "Bearer" followed by a space and then the actual JWT token. The substring starting from the 7th character removes the "Bearer " part, leaving just the JWT token.
            try {

                username = this.jwtHelper.getUsernameFromToken(token);

            } catch (IllegalArgumentException e) {
                logger.info("Illegal Argument while fetching the username !!");
                e.printStackTrace();
            } catch (ExpiredJwtException e) {
                logger.info("Given jwt token is expired !!");
                e.printStackTrace();
            } catch (MalformedJwtException e) {
                logger.info("Some changed has done in token !! Invalid Token");
                e.printStackTrace();
            } catch (Exception e) {
                e.printStackTrace();

            }

        } else {
            logger.info("Invalid Header Value !! ");
        }

        //
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // This line checks two conditions:

// username != null: It checks whether the username extracted from the JWT token is not null.
// SecurityContextHolder.getContext().getAuthentication() == null: It checks whether there is no authenticated user currently stored in the SecurityContextHolder.
// Let's break it down:

// username != null: If the username extracted from the JWT token is null, it means the JWT token might be invalid or expired, and hence no further action should be taken.
// SecurityContextHolder.getContext().getAuthentication() == null: The SecurityContextHolder is a holder for the SecurityContext that holds the details of the principal currently interacting with the application. The Authentication object within the SecurityContext holds the details of the currently authenticated user.
// SecurityContextHolder.getContext().getAuthentication(): This retrieves the current authentication object from the security context.
// == null: Checks if there is no current authentication object, meaning no user is currently authenticated.
// So, the overall condition checks whether:

// The username is not null (the JWT token is valid and has a valid username).
// No user is currently authenticated.
// If both conditions are true, it means that the JWT token is valid and a user is not currently authenticated, and therefore the user should be authenticated using the information from the JWT token.







            // fetch user detail from username
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            Boolean validateToken = this.jwtHelper.validateToken(token, userDetails);
            if (validateToken) {

                // set the authentication
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                        // The UsernamePasswordAuthenticationToken is an implementation of Spring Security's Authentication interface. It is used to represent the user's authentication request. In the context of your code, it is being used to create an authentication object after successfully validating the JWT token.

//                         userDetails: This is the UserDetails object retrieved from the UserDetailsService. It contains the user's details, including the username, password, and authorities (roles).
// null: This parameter represents the credentials. In this context, since you are using JWT for authentication, there are no separate credentials like a password. Hence, it is set to null.
// userDetails.getAuthorities(): This retrieves the authorities (roles) assigned to the user.


                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);

                // authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
// Here, you are setting the web-specific details for the authentication object using WebAuthenticationDetailsSource.

// new WebAuthenticationDetailsSource(): This is a class that provides web-specific details for the authentication process.
// buildDetails(request): This method creates the web-specific details using the current HTTP request (HttpServletRequest). It includes details like the remote address and session ID of the request.
// SecurityContextHolder.getContext().setAuthentication(authentication);
// Here, you are setting the authenticated 'authentication' object into the SecurityContextHolder.

// SecurityContextHolder.getContext(): This retrieves the security context associated with the current thread.
// setAuthentication(authentication): This method sets the provided Authentication object (authentication) into the security context. This means that the user is now considered authenticated by Spring Security for the current request.

            } else {
                logger.info("Validation fails !!");
            }

        }

        filterChain.doFilter(request, response);

//         filterChain
// filterChain is an object provided by the servlet container to the filter, which represents the remaining filters that should be applied to the request and response. When a filter calls doFilter() on the filterChain, it indicates that the request should proceed to the next filter in the chain or, if there are no more filters, to the servlet that handles the request.

// doFilter(request, response)
// doFilter() is a method of the FilterChain interface. When invoked, it passes the request and response to the next filter in the chain. If there are no more filters in the chain, it passes the request and response to the servlet that will handle the request.

// The Purpose
// In the context of this JWT authentication filter:

// After checking and possibly setting the authentication for the current request using the JWT, the doFilter(request, response); line ensures that the request continues to be processed by the next filter in the chain or reaches the servlet for further processing.

// Here’s the flow:

// The filter checks for the presence of the JWT token in the request header.
// If the token is valid, it sets the user authentication in the SecurityContextHolder.
// The doFilter() method is then called to continue the request processing.
// The request proceeds to other filters or the servlet for further processing based on the outcome of this filter's logic.

    }

}


// The purpose of the JWTAuthenticationFilter class is to intercept incoming HTTP requests, extract the JWT token from the Authorization header, validate the token, and set the user authentication in the SecurityContextHolder if the token is valid.

// Here's a breakdown of its main functionalities:

// Extract the JWT Token: It retrieves the JWT token from the Authorization header of the incoming HTTP request.
// java

// String requestHeader = request.getHeader("Authorization");
// Validate and Retrieve Username: It validates the JWT token and extracts the username from it.
// java

// if (requestHeader != null && requestHeader.startsWith("Bearer")) {
//     token = requestHeader.substring(7);
//     username = this.jwtHelper.getUsernameFromToken(token);
// }
// Check User Authentication: It checks if the user is not already authenticated, then proceeds to validate the token and set the user details in the SecurityContextHolder.
// java

// if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//     UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
//     Boolean validateToken = this.jwtHelper.validateToken(token, userDetails);
//     if (validateToken) {
//         UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                 userDetails, null, userDetails.getAuthorities());
//         authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//         SecurityContextHolder.getContext().setAuthentication(authentication);
//     }
// }
// Continue Request Processing: Finally, it continues the request processing by passing it to the next filter in the chain or the servlet.
// java

// filterChain.doFilter(request, response);
// So, the JWTAuthenticationFilter class acts as a middleware to handle the authentication process using JWT tokens, ensuring that the incoming requests are authenticated based on the provided tokens before they are processed further by the application.






