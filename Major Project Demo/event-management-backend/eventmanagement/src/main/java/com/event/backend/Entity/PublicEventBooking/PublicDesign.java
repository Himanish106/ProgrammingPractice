package com.event.backend.Entity.PublicEventBooking;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
public class PublicDesign {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long designId;
    private String serviceProviderName;
    private double price;
    @ManyToOne
    @JoinColumn(name = "venue_name")
    private PublicVenue venue;
}
