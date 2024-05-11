package com.event.backend.EventRepository.PrivateEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.Media;

@Repository
public interface MediaRepository extends JpaRepository<Media, String> {
    List<Media> findByVenue_VenueName(String venueName);
}
