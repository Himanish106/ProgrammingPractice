package com.event.backend.EventRepository.PublicEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PublicEventBooking.PublicMedia;

@Repository
public interface PublicMediaRepository extends JpaRepository<PublicMedia, String> {
    List<PublicMedia> findByVenue_VenueName(String venueName);
}