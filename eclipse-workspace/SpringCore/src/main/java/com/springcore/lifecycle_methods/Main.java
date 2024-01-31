package com.springcore.lifecycle_methods;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
//		ApplicationContext context = new ClassPathXmlApplicationContext(
//				"com/springcore/lifecycle_methods/LifeCycleconfig.xml");
		/*
		 * So we were seeing that even though the init method was getting called the
		 * destroy method was not getting called. So in order to call the destroy method
		 * we need a hook called the register shutdown hook. But this method is not
		 * inside the ApplicationContext Interface. So in order to use this we need an
		 * Interface called AbstractApplicationContext Interface.
		 */
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/lifecycle_methods/LifeCycleconfig.xml");
		Car c = (Car) context.getBean("car");
		System.out.println(c);
//		registering the shutdown hook
		context.registerShutdownHook();
	}

}
