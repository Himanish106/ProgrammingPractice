package com.event.backend.EventRepository.PrivateEventRepository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.PrivateVenue;

@Repository
public interface VenueRepository extends JpaRepository<PrivateVenue, Long> {
    List<PrivateVenue> findByCity_CityId(Long cityId);
}
