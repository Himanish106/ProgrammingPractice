package com.spring.autowiring.autowiredannotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/spring/autowiring/autowiredannotation/AutoWireconfig.xml");
		Employee e = context.getBean("emp1", Employee.class); // In case you do not want to use typecasting
		System.out.println(e);
	}

}
