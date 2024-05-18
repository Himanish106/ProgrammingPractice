package com.event.backend.EventRepository.PublicEventRepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.PublicEventBooking.PublicCity;



@Repository
public interface PublicCityRepository extends JpaRepository<PublicCity, Long> {
    List<PublicCity> findByState_StateId(Long stateId);
}
