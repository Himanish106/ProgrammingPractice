package com.event.backend.Service.SendingPDF;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class PDFEmailService {
    
    @Autowired
    private JavaMailSender mailSender;
     public void sendEmailWithAttachment(String toEmail, String subject, String message, byte[] attachmentData, String attachmentName) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(toEmail);
        helper.setSubject(subject);
        helper.setText(message);
        helper.addAttachment(attachmentName, new ByteArrayResource(attachmentData));

        mailSender.send(mimeMessage);
    }
}
