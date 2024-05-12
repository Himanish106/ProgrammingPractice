package com.event.backend.EventRepository.PublicEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PublicEventBooking.PublicDesign;

@Repository
public interface PublicDesignRepository extends JpaRepository<PublicDesign, String> {
    List<PublicDesign> findByVenue_VenueName(String venueName);
}
