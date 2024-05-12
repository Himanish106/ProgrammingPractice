package com.event.backend.Entity.PublicEventBooking;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PublicCaterer {
    @Id
    private String serviceName;
    private double price;
    @ManyToOne
    @JoinColumn(name = "venue_name")
    private PublicVenue venue;
}