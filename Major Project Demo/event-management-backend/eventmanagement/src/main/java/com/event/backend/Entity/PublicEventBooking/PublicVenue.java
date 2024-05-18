package com.event.backend.Entity.PublicEventBooking;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long venueId;
    private String venueName;
    private int capacity;
    private String location;
    private double price;
    private Long contact;
    @ManyToOne
    @JoinColumn(name = "city_name")
    private PublicCity city;
    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("venue")
    private List<PublicDesign> designs;

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("venue")
    private List<PublicMedia> medias;

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("venue")
    private List<PublicCaterer> caterers;
}