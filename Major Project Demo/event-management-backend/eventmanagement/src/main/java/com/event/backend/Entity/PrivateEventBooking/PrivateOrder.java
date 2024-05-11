package com.event.backend.Entity.PrivateEventBooking;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class PrivateOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String eventType;
    private String state;
    private String city;
    private String venueName;
    @Column(length = 1000)
    private String eventDescription;
    private Date eventDate;
    private String cateringFacility;
    private String caterer;
    private String designAndMediaFacility;
    private String designService;
    private String mediaService;
    private int capacity;
    private double totalPrice;
    private String email;
}