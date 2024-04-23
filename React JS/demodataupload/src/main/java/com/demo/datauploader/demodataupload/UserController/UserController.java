package com.demo.datauploader.demodataupload.UserController;
import com.demo.datauploader.demodataupload.UserEntity.User;
import com.demo.datauploader.demodataupload.UserService.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/upload")
    public User upload(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/api/view")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}
