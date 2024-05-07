package com.event.backend.Service.OTP;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendOTP(String toEmail,String otp){
        String subject="Your One time Password";
        String body= "Your OTP is: "+ otp;
        sendEmail(toEmail, subject, body);
    }

    private void sendEmail(String toEmail, String subject, String body){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("eventvista83@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        javaMailSender.send(message);
        System.out.println("Mail sent Successfully");
    }
}

