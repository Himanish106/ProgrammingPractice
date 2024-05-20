package com.event.backend.Utility;

import com.event.backend.Entity.TicketingInfo;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.IOException;


public class PDFGenerator {

    public static byte[] generateTicketPDF(TicketingInfo ticketingInfo) {
        try (PDDocument document = new PDDocument()) {
            for (int i = 1; i <= ticketingInfo.getNoOfPersons(); i++) {
                PDPage page = new PDPage();
                document.addPage(page);

                try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
                    float titleX = 100;
                    float titleY = 700;
                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA_BOLD, 40);
                    contentStream.setNonStrokingColor(Color.BLUE);
                    contentStream.newLineAtOffset(titleX, titleY);
                    contentStream.showText("Event");
                    contentStream.endText();
                    float eventWidth = (PDType1Font.HELVETICA_BOLD.getStringWidth("Event") / 1000) * 40;
                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA_BOLD, 40);
                    contentStream.setNonStrokingColor(Color.BLACK);
                    contentStream.newLineAtOffset(titleX + eventWidth + 5, titleY);
                    contentStream.showText("Vista");
                    contentStream.endText();
                    float detailsY = 600; 
                    float lineSpacing = 40;
                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA, 30);
                    contentStream.setNonStrokingColor(Color.BLACK);
                    contentStream.newLineAtOffset(100, detailsY);
                    contentStream.showText("Event: " + ticketingInfo.getEventName());
                    contentStream.endText();
                    detailsY -= lineSpacing; 
                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA, 30);
                    contentStream.setNonStrokingColor(Color.BLACK);
                    contentStream.newLineAtOffset(100, detailsY);
                    contentStream.showText("Venue: " + ticketingInfo.getVenue());
                    contentStream.endText();

                    detailsY -= lineSpacing; 

                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA, 30);
                    contentStream.newLineAtOffset(100, detailsY); 
                    contentStream.showText("State: " + ticketingInfo.getState());
                    contentStream.endText();

                    detailsY -= lineSpacing; 

                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA, 30);
                    contentStream.newLineAtOffset(100, detailsY); 
                    contentStream.showText("Date: " + ticketingInfo.getDate());
                    contentStream.endText();

                    detailsY -= lineSpacing; 

                    contentStream.beginText();
                    contentStream.setFont(PDType1Font.HELVETICA, 30);
                    contentStream.newLineAtOffset(100, detailsY);
                    contentStream.showText("Ticket for Person: " + i);
                    contentStream.endText();
                }
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            document.save(out);
            return out.toByteArray();
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to generate PDF", e);
        }
    }
}
