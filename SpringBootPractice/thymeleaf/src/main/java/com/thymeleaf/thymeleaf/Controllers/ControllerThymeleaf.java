package com.thymeleaf.thymeleaf.Controllers;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerThymeleaf {
    @GetMapping(value = "/about")
    public String about(Model model) {
        // Model is basically used to pass dynamic content for viewing purpose in HTML
        // page
        System.out.println("This is about page");
        model.addAttribute("name", "Himanish"); // Key and value pair
        model.addAttribute("currentDate", new Date().toString());
        return "about";
    }
}
