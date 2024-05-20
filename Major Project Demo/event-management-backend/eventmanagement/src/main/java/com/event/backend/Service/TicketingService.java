package com.event.backend.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.event.backend.Entity.TicketingInfo;
import com.event.backend.EventRepository.TicketingInfoRepo;
import com.event.backend.Service.SendingPDF.PDFEmailService;
import com.event.backend.Utility.PDFGenerator;

import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;

@Service
public class TicketingService {
    @Autowired
    private TicketingInfoRepo ticketingInfoRepo;

    @Autowired
    private PDFEmailService pdfEmailService;

    public TicketingInfo saveTicketingInfo(TicketingInfo ticketingInfo) {
        return ticketingInfoRepo.save(ticketingInfo);
    }

    public void handlePostTicketing(TicketingInfo ticketingInfo) throws IOException, MessagingException {
        saveTicketingInfo(ticketingInfo);
        byte[] pdfData = PDFGenerator.generateTicketPDF(ticketingInfo);
        pdfEmailService.sendEmailWithAttachment(ticketingInfo.getEmail(), "Your Ticket Confirmation",
                "Here is your ticket confirmation.", pdfData, "ticket.pdf");
    }

    public List<TicketingInfo> getAllTicketingInfos() {
        return ticketingInfoRepo.findAll();
    }

    @Transactional
    public void deleteTicketingInfo(Long id) {
        ticketingInfoRepo.deleteById(id);
    }
}
