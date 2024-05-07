package com.spring.email.demo.email.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.email.demo.email.Service.EmailSending;

@RestController
@RequestMapping("/otp")
public class OtpController {
    @Autowired
    private EmailSending emailSending;

    @PostMapping("/sendotp")
    public void sendOTP(@RequestBody String userEmail){
        emailSending.sendEmail(userEmail);
    }
}
