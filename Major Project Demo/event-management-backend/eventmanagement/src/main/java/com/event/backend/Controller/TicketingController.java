package com.event.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.event.backend.Entity.TicketingInfo;
import com.event.backend.Service.TicketingService;

@RequestMapping(value = "/ticketing")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TicketingController {
    @Autowired
    private TicketingService ticketingService;

    @PostMapping("/postinfo")
    public ResponseEntity<TicketingInfo> postTicketing(@RequestBody TicketingInfo ticketingInfo) {
        TicketingInfo info = ticketingService.saveTicketingInfo(ticketingInfo);
        return ResponseEntity.status(HttpStatus.CREATED).body(info);
    }

    @GetMapping("/allinfos")
    public ResponseEntity<List<TicketingInfo>> getAllTicketingInfos() {
        List<TicketingInfo> infos = ticketingService.getAllTicketingInfos();
        return new ResponseEntity<>(infos, HttpStatus.OK);
    }
}
