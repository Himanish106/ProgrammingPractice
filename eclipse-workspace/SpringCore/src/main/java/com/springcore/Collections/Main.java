package com.springcore.Collections;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/Collections/CollectionConfig.xml");
		Employees emp1 = (Employees) context.getBean("emp1");
		System.out.println(emp1.getName());
		System.out.println(emp1.getAddresses());
		System.out.println(emp1.getPhoneNumbers());
		System.out.println(emp1.getCourses());
	}

}
