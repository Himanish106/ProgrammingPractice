package com.springboot.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
	@GetMapping("/")
	public String home() {
		System.out.println("This is home page");
		return "home";
	}
	
	@GetMapping("/contact")
	public String contact() {
		return "contact";
	}
}
