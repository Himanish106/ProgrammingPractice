package com.link.tables.linktables.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.link.tables.linktables.Entities.Venue;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
    List<Venue> findByCity_CityId(Long cityId);
}