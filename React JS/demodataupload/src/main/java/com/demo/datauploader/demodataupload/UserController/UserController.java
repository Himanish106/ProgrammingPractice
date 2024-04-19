package com.demo.datauploader.demodataupload.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.datauploader.demodataupload.UserEntity.User;
import com.demo.datauploader.demodataupload.UserService.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/api/upload")
    public User upload(@RequestBody User user) {
        return userService.saveUser(user);
    }
}
