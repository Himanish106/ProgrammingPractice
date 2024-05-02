package com.event.backend.EventRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,String> {
    
}
