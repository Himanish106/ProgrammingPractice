package com.springcore.standalone.collections;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/standalone/collections/Standaloneconfig.xml");
		Person p = (Person) context.getBean("person1");
		System.out.println(p);
		System.out.println(p.getFriends().getClass().getName()); // java.util.LinkedList
		/*
		 * The main reason of using the Standalone list is that if we do not use
		 * standalone list and define list as we had done in Collection Property
		 * Injection then we cannot use our desired list and have to use a list which
		 * spring provides by default i.e. an arraylist. If we want to use our desired
		 * list we can use collections.
		 * 
		 * Second is that standalone list provides us the reusability feature.If we need
		 * to use the same list with same values for a different object then in the
		 * configuration file we need to define it only once.
		 * 
		 * SAME WILL BE THE CASE FOR OTHER COLLECTION FRAMEWORK
		 */
		System.out.println(p.getFeestructure().getClass().getName());
	}
}
