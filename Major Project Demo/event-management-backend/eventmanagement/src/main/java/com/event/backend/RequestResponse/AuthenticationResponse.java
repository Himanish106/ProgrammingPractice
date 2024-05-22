package com.event.backend.RequestResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class AuthenticationResponse {
    private String jwt;
    private String username;
    private String firstName;
    private String lastName;
    private Long contact;
}
