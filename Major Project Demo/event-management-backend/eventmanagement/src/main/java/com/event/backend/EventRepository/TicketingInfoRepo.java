package com.event.backend.EventRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.TicketingInfo;

@Repository
public interface TicketingInfoRepo extends JpaRepository<TicketingInfo, Long> {

}