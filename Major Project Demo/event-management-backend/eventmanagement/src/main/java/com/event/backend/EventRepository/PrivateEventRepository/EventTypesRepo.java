package com.event.backend.EventRepository.PrivateEventRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.EventTypes;

@Repository
public interface EventTypesRepo extends JpaRepository<EventTypes,String> {
    
}
