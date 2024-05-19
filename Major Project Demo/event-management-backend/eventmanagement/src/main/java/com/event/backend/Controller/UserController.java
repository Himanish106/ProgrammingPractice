package com.event.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/userfeedback")
    public ResponseEntity<List<Feedback>> getAllFeedbacks() {
        List<Feedback> feedbacks = eventService.getFeedback();
        return ResponseEntity.ok().body(feedbacks);
    }
    @DeleteMapping("/deletefeedback/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable String id) {
        eventService.deleteFeedback(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/contact")
    public ResponseEntity<ContactUs> createContact(@RequestBody ContactUs contact) {
        ContactUs savedContact = eventService.saveContactUs(contact);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContact);
    }

    @GetMapping("/usercontact")
    public ResponseEntity<List<ContactUs>> getAllContacts() {
        List<ContactUs> contactUs = eventService.getContactUs();
        return ResponseEntity.ok().body(contactUs);
    }

    @DeleteMapping("/deletecontact/{id}")
    public ResponseEntity<Void> deleteContact(@PathVariable String id) {
        eventService.deleteContact(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
