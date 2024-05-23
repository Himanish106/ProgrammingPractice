package com.event.backend.EventRepository.PrivateEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.PrivateCaterer;

@Repository
public interface CatererRepository extends JpaRepository<PrivateCaterer, Long> {
     List<PrivateCaterer> findByVenue_VenueId(Long venueId);
}
