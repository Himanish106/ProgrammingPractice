package com.springboot.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class TestController {

//	@RequestMapping("/test") --> This was generating an error. The reason is whatever we are
//	returning from the method there needs to be a page exisiting with the same url. But in 
//	order to return the value as a response string we need an annotation known as 
//	@ResponseBody. This will return the returned value as a response.
//	public String test() {
//		int a = 20;
//		int b = 10;
//		return "This is a sample test method to demo Spring Devtools and the sum of the " + "numbers a and b is /t "
//				+ (a + b);
//	}

	@RequestMapping("/test")
	@ResponseBody
	public String test() {
		int a = 20;
		int b = 90;
		return "This is a sample test method to demo Spring Devtools and the sum of the " + "numbers a and b is \t "
				+ (a + b);
	}
}
