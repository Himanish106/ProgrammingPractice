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
public class PublicVenue {
    @Id
    private String venueName;
    private int capacity;
    private String location;
    private double price;
    private Long contact;
    @ManyToOne
    @JoinColumn(name = "city_name")
    private PublicCity city;

}