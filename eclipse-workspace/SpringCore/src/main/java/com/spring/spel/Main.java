package com.spring.spel;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/spring/spel/spelconfig.xml");
		Demo d1 = context.getBean("demo", Demo.class);
		System.out.println(d1);
	}
}
