package com.event.backend.Service.OTP;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class OTPService {

    public String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }
}
