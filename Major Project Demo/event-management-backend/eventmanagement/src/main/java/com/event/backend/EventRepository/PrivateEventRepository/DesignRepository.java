package com.event.backend.EventRepository.PrivateEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.Design;

@Repository
public interface DesignRepository extends JpaRepository<Design, String> {
    List<Design> findByVenue_VenueName(String venueName);
}
