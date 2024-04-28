package com.practice.jwt.jwt.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/admin")
@RestController
public class AdminController {
    @GetMapping("/adminhello")
    public ResponseEntity<String> adminHello() {
        return ResponseEntity.ok("Hii Admin");
    }
}
