package com.event.backend.EventRepository.PublicEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PublicEventBooking.PublicCaterer;

@Repository
public interface PublicCatererRepository extends JpaRepository<PublicCaterer, Long> {
    List<PublicCaterer> findByVenue_VenueId(Long venueId);
}
