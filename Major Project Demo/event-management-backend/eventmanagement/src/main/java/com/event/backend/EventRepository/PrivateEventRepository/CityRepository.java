package com.event.backend.EventRepository.PrivateEventRepository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PrivateEventBooking.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
    List<City> findByState_StateId(Long stateId);
}
