package com.link.tables.linktables.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.link.tables.linktables.Entities.State;
@Repository
public interface StateRepository extends JpaRepository<State, Long> {

}
