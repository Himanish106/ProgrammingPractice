package com.springcore.Constructorinjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/Constructorinjection/Consconfig.xml");
		Person p = (Person) context.getBean("person");
//		System.out.println(p.toString());
		
		ApplicationContext context2 = new ClassPathXmlApplicationContext(
				"com/springcore/Constructorinjection/Consconfig.xml");
		Person p1 = (Person) context2.getBean("person1");
//		System.out.println(p1.toString());
		
		ApplicationContext context3 = new ClassPathXmlApplicationContext(
				"com/springcore/Constructorinjection/Consconfig.xml");
		Person p2 = (Person) context3.getBean("person2");
		System.out.println(p2.toString());
	}

}
