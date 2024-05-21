package com.event.backend.Utility;

import com.event.backend.Entity.TicketingInfo;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.util.Matrix;

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
                    drawWatermark(contentStream, page);
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
      private static void drawWatermark(PDPageContentStream contentStream, PDPage page) throws IOException {
        String watermarkText = "Event Vista";

        // Set up the font and size for the watermark
        contentStream.setFont(PDType1Font.HELVETICA_BOLD, 100);
        contentStream.setNonStrokingColor(new Color(200, 200, 200, 50)); // Light grey with some transparency

        // Get the dimensions of the page
        float pageWidth = page.getMediaBox().getWidth();
        float pageHeight = page.getMediaBox().getHeight();

        // Calculate the width of the watermark text
        float textWidth = (PDType1Font.HELVETICA_BOLD.getStringWidth(watermarkText) / 1000) * 60;

        // Create a transformation matrix for rotation and positioning
        float offsetX = (pageWidth - textWidth) / 2;
        float offsetY = pageHeight / 2 - 120;

        Matrix transform = Matrix.getRotateInstance(Math.toRadians(45), offsetX, offsetY);

        // Apply the transformation and write the text
        contentStream.beginText();
        contentStream.setTextMatrix(transform);
        contentStream.showText(watermarkText);
        contentStream.endText();
    }
}
