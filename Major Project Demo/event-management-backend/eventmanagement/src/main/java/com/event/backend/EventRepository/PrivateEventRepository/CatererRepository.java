package com.event.backend.EventRepository.PrivateEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.Caterer;

@Repository
public interface CatererRepository extends JpaRepository<Caterer, Long> {
     List<Caterer> findByVenue_VenueId(Long venueId);
}
