package com.event.backend.EventRepository.PrivateEventRepository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.PrivateCity;

@Repository
public interface CityRepository extends JpaRepository<PrivateCity, Long> {
    List<PrivateCity> findByState_StateId(Long stateId);
}
