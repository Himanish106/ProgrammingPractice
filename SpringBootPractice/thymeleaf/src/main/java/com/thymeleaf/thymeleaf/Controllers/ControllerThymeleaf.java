package com.thymeleaf.thymeleaf.Controllers;

import java.util.Date;
import java.util.List;

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

    // handler for looping
    @GetMapping("/example-loop")
    public String iterateHandler(Model m) {
        // Create a collection
        List<String> names = List.of("Ankit", "Laxmi", "Rahul", "Karan", "John");
        m.addAttribute("names", names);
        return "iterate";
    }

    // handler for conditional statements
    @GetMapping("/condition")
    public String conditionHandler(Model m) {
        System.out.println("Conditional handler executed...");
        m.addAttribute("isActive", true);
        m.addAttribute("gender", "F");

        List<Integer> list = List.of(23, 45);
        m.addAttribute("numberList", list);
        return "condition";
    }

    // handler for including fragments
    @GetMapping("/service")
    public String serviceHandler(Model m) {
        return "service";
    }
}
