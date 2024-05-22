package com.event.backend.Utility;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.util.Matrix;
import com.event.backend.Entity.PublicEventBooking.PublicOrder;

public class PublicPDFGenerator {
    public static byte[] generateReceiptPDF(PublicOrder publicOrder) {
        try (PDDocument document = new PDDocument()) {
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
                contentStream.showText("Event: " + publicOrder.getEventType());
                contentStream.endText();
                detailsY -= lineSpacing;
                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.setNonStrokingColor(Color.BLACK);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Venue: " + publicOrder.getVenueName());
                contentStream.endText();

                detailsY -= lineSpacing;

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("State: " + publicOrder.getState());
                contentStream.endText();

                detailsY -= lineSpacing;
                Date eventDate = publicOrder.getEventDate();

                // Convert Date to LocalDate
                LocalDate localDate = eventDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

                // Define the desired date format (Month Date, Year)
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");

                // Format the date to a string
                String formattedDate = localDate.format(formatter);

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Date: " + formattedDate);
                contentStream.endText();

                detailsY -= lineSpacing;

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Caterer: " + publicOrder.getCaterer());
                contentStream.endText();
                detailsY -= lineSpacing;

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Designer: " + publicOrder.getDesignService());
                contentStream.endText();
                detailsY -= lineSpacing;

                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Media: " + publicOrder.getMediaService());
                contentStream.endText();

                detailsY -= lineSpacing;
                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 30);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Total Price Paid: " + publicOrder.getTotalPrice());
                contentStream.endText();

                detailsY -= lineSpacing;
                contentStream.beginText();
                contentStream.setFont(PDType1Font.HELVETICA, 12);
                contentStream.setNonStrokingColor(Color.BLACK);
                contentStream.newLineAtOffset(100, detailsY);
                contentStream.showText("Additional costs will be communicated at a later stage.");
                contentStream.endText();
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
        float offsetY = pageHeight / 2 - 180;

        Matrix transform = Matrix.getRotateInstance(Math.toRadians(45), offsetX, offsetY);

        // Apply the transformation and write the text
        contentStream.beginText();
        contentStream.setTextMatrix(transform);
        contentStream.showText(watermarkText);
        contentStream.endText();
    }
}
