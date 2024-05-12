package com.event.backend.EventRepository.PublicEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PublicEventBooking.PublicVenue;


@Repository
public interface PublicVenueRepository extends JpaRepository<PublicVenue, String> {
    List<PublicVenue> findByCity_CityName(String cityName);
}
