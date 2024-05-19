package com.event.backend.Entity.PublicEventBooking;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
public class PublicOrder {
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
    private String advertisingFacility;
    private String onsiteManagementFacility;
    private String designService;
    private String mediaService;
    private int capacity;
    private double ticketPrice;
    private double totalPrice;
    private String email;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] data;
}
