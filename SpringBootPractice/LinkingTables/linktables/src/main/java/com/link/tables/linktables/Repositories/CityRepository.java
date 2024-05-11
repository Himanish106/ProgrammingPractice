package com.link.tables.linktables.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.link.tables.linktables.Entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
    List<City> findByState_StateId(Long stateId);
}
