package com.link.tables.linktables.Entities;

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

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Caterer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cateringServiceId;
    private String serviceName;
    private double price;
    @ManyToOne
    @JoinColumn(name = "venue_id")
    private Venue venue;
}
