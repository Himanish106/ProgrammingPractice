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
public class PublicCity {
    @Id
    private String cityName;
    @ManyToOne
    @JoinColumn(name = "state_name")
    private PublicState state;
}