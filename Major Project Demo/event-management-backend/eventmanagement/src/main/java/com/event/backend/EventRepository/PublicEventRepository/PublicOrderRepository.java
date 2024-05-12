package com.event.backend.EventRepository.PublicEventRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PublicEventBooking.PublicOrder;

@Repository
public interface PublicOrderRepository extends JpaRepository<PublicOrder,Long> {
    
}
