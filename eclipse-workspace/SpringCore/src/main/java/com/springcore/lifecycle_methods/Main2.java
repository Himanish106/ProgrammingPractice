package com.springcore.lifecycle_methods;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main2 {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/lifecycle_methods/LifeCycleconfig.xml");
		Bus b = (Bus) context.getBean("bus");
		System.out.println(b);
		context.registerShutdownHook();
	}

}
