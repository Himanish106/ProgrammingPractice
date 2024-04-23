package com.jwt.database.jwtdatabase.Security;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JWTHelper {
    // set token validity
    public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

    // set secret key

    private String secret = "afafasfafafasfasfasfafacasdasfasxASFACASDFACASDFASFASFDAFASFASDAADSCSDFADCVSGCFVADXCcadwavfsfarvf";

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        return Keys.hmacShaKeyFor(keyBytes);
        // The Keys.hmacShaKeyFor(keyBytes) method is used to generate an HMAC
        // (Hash-based Message Authentication Code) signing key using the byte array
        // obtained from the secret.

        // What is HMAC?
        // HMAC is a specific type of message authentication code (MAC) involving a
        // cryptographic hash function and a secret cryptographic key. HMACs are used to
        // verify both the data integrity and the authenticity of a message.

        // How does it work?
        // Decoding the Secret:
        // Decoders.BASE64.decode(secret): Decodes the secret key from Base64 encoding
        // to obtain a byte array.
        // Generating the HMAC Key:
        // Keys.hmacShaKeyFor(keyBytes): Generates an HMAC signing key using the byte
        // array obtained from the secret.

        // The Keys.hmacShaKeyFor(keyBytes) method will generate an HMAC key using the
        // byte array keyBytes.

        // Summary
        // The Keys.hmacShaKeyFor(keyBytes) method is used to generate an HMAC signing
        // key from the decoded secret key. This HMAC key is then used to sign the JWT
        // during its creation and to verify the JWT's signature during its validation.
    }

    // for retrieving any information from the token we need a secret key
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token).getBody();
        // Building the Parser:
        // Jwts.parserBuilder(): Initializes a new JWT parser builder.
        // Setting the Signing Key:
        // .setSigningKey(getSignKey()): Sets the HMAC signing key obtained from
        // getSignKey() to verify the JWT's signature.
        // Building the Parser:
        // .build(): Builds the JWT parser.
        // Parsing the JWT:
        // .parseClaimsJws(token): Parses the received JWT to validate its signature and
        // retrieves the JWS (JSON Web Signature) representation of the JWT.
        // Getting the Body:
        // .getBody(): Retrieves the body (claims) from the JWS, which contains the
        // payload of the JWT.

        // Some info about the Claims class
        // The Claims class in the JWT (JSON Web Token) library represents the payload
        // of the JWT. It contains all the claims or attributes that are stored in the
        // JWT, such as:

        // Subject (sub): The subject of the token, typically the username or user ID.
        // Issuer (iss): The issuer of the token, usually the server that issued the
        // token.
        // Expiration Time (exp): The expiration time of the token.
        // Issued At (iat): The time at which the token was issued.
        // Custom Claims: Any other additional information or attributes you want to
        // store in the token.
        // Methods of the Claims class
        // Some of the commonly used methods of the Claims class are:

        // getSubject(): Retrieves the subject of the token.
        // getIssuer(): Retrieves the issuer of the token.
        // getExpiration(): Retrieves the expiration time of the token.
        // getIssuedAt(): Retrieves the time at which the token was issued.
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
        // The getClaimFromToken method is a generic method that extracts a specific
        // claim from a JWT (JSON Web Token) using a Function<Claims, T> as a parameter.

        // <T>: This is a generic type parameter that represents the type of the claim
        // value that will be extracted from the token.
        // String token: This is the JWT from which the claim will be extracted.
        // Function<Claims, T> claimsResolver: This is a functional interface that takes
        // a Claims object (which contains all the claims from the JWT) and returns a
        // value of type T. The claimsResolver function is used to extract a specific
        // claim from the Claims object.
    }

    // Retrieve username from JWT token
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
        // :: This is a shortcut for lambda expressions. claims -> claims.getSubject()
        // is equivalent to Claims::getSubject
    }

    // retrieve expiration date from JWT token
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    // Check if the token has expired
    private Boolean isTokenExpired(String token) {
        final Date Expiration = getExpirationDateFromToken(token);
        return Expiration.before(new Date());
        // return expiration.before(new Date());: This line checks if the expiration
        // date is before the current date and time (new Date()), and returns true if
        // the token has expired, and false otherwise.
    }

    // generate token for user
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    // while creating the token -
    // 1. Define claims of the token, like Issuer, Expiration, Subject, and the ID
    // 2. Sign the JWT using the HS512 algorithm and secret key.
    // 3. According to JWS Compact
    // Serialization(https://tools.ietf.org/html/draft-ietf-jose-json-web-signature-41#section-3.1)
    // compaction of the JWT to a URL-safe string
    private String doGenerateToken(Map<String, Object> claims, String subject) {

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();

        // Parameters:
        // claims: A Map<String, Object> containing the claims (payload) to be included
        // in the JWT.
        // subject: The subject of the token, typically the username or user ID.
        // How it works:
        // JWT Builder Initialization:
        // Jwts.builder(): Initializes a new JWT builder.
        // Setting the Claims:
        // .setClaims(claims): Sets the claims (payload) of the JWT using the provided
        // claims map.
        // Setting the Subject:
        // .setSubject(subject): Sets the subject of the JWT to the provided subject.
        // Setting the Issued At Date:
        // .setIssuedAt(new Date(System.currentTimeMillis())): Sets the issue date of
        // the JWT to the current time.
        // Setting the Expiration Date:
        // .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY *
        // 1000)): Sets the expiration date of the JWT to the current time plus the JWT
        // token validity duration.
        // Signing the JWT:
        // .signWith(getSignKey(), SignatureAlgorithm.HS256): Signs the JWT using the
        // HMAC signing key obtained from getSignKey() and the HS256 algorithm.
        // Compacting the JWT:
        // .compact(): Compacts the JWT into a URL-safe string.
    }

    // validate token
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
