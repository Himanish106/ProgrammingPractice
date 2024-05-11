package com.event.backend.Entity.PrivateEventBooking;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Design {
    @Id
    private String serviceProviderName;
    private double price;
    @ManyToOne
    @JoinColumn(name = "venue_name")
    private Venue venue;
}
