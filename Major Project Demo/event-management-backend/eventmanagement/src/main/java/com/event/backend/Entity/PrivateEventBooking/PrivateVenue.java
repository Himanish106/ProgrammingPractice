package com.event.backend.Entity.PrivateEventBooking;

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
public class PrivateVenue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long venueId;
    private String venueName;
    private int capacity;
    private String location;
    private double price;
    private Long contact;
    @ManyToOne
    @JoinColumn(name = "city_id")
    private PrivateCity city;

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonIgnoreProperties("venue")
    private List<PrivateDesign> designs;

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonIgnoreProperties("venue")
    private List<PrivateMedia> medias;

    @OneToMany(mappedBy = "venue", cascade = CascadeType.ALL, orphanRemoval = true)
     @JsonIgnoreProperties("venue")
    private List<PrivateCaterer> caterers;
}
