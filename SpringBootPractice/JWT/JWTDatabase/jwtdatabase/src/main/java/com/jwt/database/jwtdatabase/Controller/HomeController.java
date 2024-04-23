package com.jwt.database.jwtdatabase.Controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.database.jwtdatabase.Entity.User;
import com.jwt.database.jwtdatabase.Service.UserService;


@RestController
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsers() {
        System.out.println("Fetching Users");
        return userService.getUsers();
    }

    @GetMapping("/username")
    public String getLoggedInUser(Principal principal) {
        return principal.getName();
    }
}
