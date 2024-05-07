package com.spring.email.demo.email.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailSending {
    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private OTPService otpService;

    public void sendEmail(String userEmail) {
        String otp=otpService.generateOTP();
       emailSenderService.sendOTP(userEmail, otp);
    }
}
