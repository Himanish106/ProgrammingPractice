package com.event.backend.EventRepository.PrivateEventRepository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.Venue;

@Repository
public interface VenueRepository extends JpaRepository<Venue, String> {
    List<Venue> findByCity_CityName(String cityName);
}
