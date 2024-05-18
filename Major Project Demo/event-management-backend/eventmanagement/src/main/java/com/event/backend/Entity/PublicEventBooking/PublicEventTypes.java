package com.event.backend.Entity.PublicEventBooking;

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
public class PublicEventTypes {
   @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long eventId;
    public String eventType;
}