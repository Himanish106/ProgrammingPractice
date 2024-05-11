package com.event.backend.EventRepository.PrivateEventRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.PrivateOrder;

@Repository
public interface PrivateOrderRepository extends JpaRepository<PrivateOrder, Long> {
    
}
