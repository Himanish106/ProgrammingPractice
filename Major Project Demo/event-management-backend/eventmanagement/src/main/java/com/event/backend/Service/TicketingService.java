package com.event.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.backend.Entity.TicketingInfo;
import com.event.backend.EventRepository.TicketingInfoRepo;

import jakarta.transaction.Transactional;

@Service
public class TicketingService {
    @Autowired
    private TicketingInfoRepo ticketingInfoRepo;

    public TicketingInfo saveTicketingInfo(TicketingInfo ticketingInfo) {
        return ticketingInfoRepo.save(ticketingInfo);
    }

    public List<TicketingInfo> getAllTicketingInfos() {
        return ticketingInfoRepo.findAll();
    }

    @Transactional
    public void deleteTicketingInfo(Long id) {
        ticketingInfoRepo.deleteById(id);
    }
}
