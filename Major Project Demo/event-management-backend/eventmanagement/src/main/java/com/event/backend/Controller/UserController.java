package com.event.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.backend.Entity.ContactUs;
import com.event.backend.Entity.Feedback;
import com.event.backend.Service.EventService;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private EventService eventService;

    @PostMapping("/feedback")
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback) {
        Feedback savedFeedback = eventService.saveFeedback(feedback);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFeedback);
    }
    @PostMapping("/contact")
    public ResponseEntity<ContactUs> createContact(@RequestBody ContactUs contact) {
        ContactUs savedContact = eventService.saveContactUs(contact);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContact);
    }
}
