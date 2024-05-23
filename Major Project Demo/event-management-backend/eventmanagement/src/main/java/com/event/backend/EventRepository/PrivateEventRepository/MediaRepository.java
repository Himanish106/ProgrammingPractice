package com.event.backend.EventRepository.PrivateEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.PrivateMedia;

@Repository
public interface MediaRepository extends JpaRepository<PrivateMedia, Long> {
    List<PrivateMedia> findByVenue_VenueId(Long venueId);
}
