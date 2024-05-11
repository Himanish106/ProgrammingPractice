package com.link.tables.linktables.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.link.tables.linktables.Entities.Caterer;

@Repository
public interface CatererRepository extends JpaRepository<Caterer, Long> {
     List<Caterer> findByVenue_VenueId(Long venueId);
}
