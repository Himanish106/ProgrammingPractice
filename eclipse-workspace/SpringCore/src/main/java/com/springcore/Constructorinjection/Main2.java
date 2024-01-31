package com.springcore.Constructorinjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main2 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/Constructorinjection/ConsConfig.xml");
		Addition a = (Addition) context.getBean("case1");
		a.doSum();
	}

}
