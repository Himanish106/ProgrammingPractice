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
public class PrivateCity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cityId;
    private String cityName;
    @ManyToOne
    @JoinColumn(name = "state_id")
    private PrivateState state;
    @OneToMany(mappedBy = "city", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("city")
    private List<PrivateVenue> venues;
}