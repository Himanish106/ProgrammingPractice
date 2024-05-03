package com.event.backend.EventRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.ContactUs;

@Repository
public interface ContactUsRepo extends JpaRepository<ContactUs,String> {

}