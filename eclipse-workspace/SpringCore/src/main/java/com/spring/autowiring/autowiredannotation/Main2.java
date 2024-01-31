package com.spring.autowiring.autowiredannotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main2 {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/spring/autowiring/autowiredannotation/AutoWireconfig.xml");
		Employee2 e = context.getBean("emp2", Employee2.class);
		System.out.println(e);
	}
}
