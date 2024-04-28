package com.practice.jwt.jwt.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/user")
@RestController
public class UserController {
    @GetMapping("/userhello")
    public ResponseEntity<String> userHello() {
        return ResponseEntity.ok("Hii From User");
    }
}
