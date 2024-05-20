package com.event.backend.Controller;

import java.io.IOException;
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

import com.event.backend.Entity.TicketingInfo;
import com.event.backend.Service.TicketingService;

import jakarta.mail.MessagingException;

@RequestMapping(value = "/ticketing")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TicketingController {
    @Autowired
    private TicketingService ticketingService;

    @PostMapping("/postinfo")
    public ResponseEntity<TicketingInfo> postTicketing(@RequestBody TicketingInfo ticketingInfo) {
        try {
            ticketingService.handlePostTicketing(ticketingInfo);
            return ResponseEntity.status(HttpStatus.CREATED).body(ticketingInfo);
        } catch (IOException | MessagingException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/allinfos")
    public ResponseEntity<List<TicketingInfo>> getAllTicketingInfos() {
        List<TicketingInfo> infos = ticketingService.getAllTicketingInfos();
        return new ResponseEntity<>(infos, HttpStatus.OK);
    }

    @DeleteMapping("deleteinfo/{id}")
    public ResponseEntity<Void> deletePrivateOrder(@PathVariable Long id) {
        ticketingService.deleteTicketingInfo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
