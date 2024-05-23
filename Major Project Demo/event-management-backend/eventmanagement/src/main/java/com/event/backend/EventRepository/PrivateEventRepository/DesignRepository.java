package com.event.backend.EventRepository.PrivateEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.PrivateDesign;

@Repository
public interface DesignRepository extends JpaRepository<PrivateDesign, Long> {
    List<PrivateDesign> findByVenue_VenueId(Long venueId);
}
