package com.springcore.lifecycle_methods;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main3 {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext(
				"com/springcore/lifecycle_methods/LifeCycleconfig.xml");
		Example e = (Example) context.getBean("example");
		System.out.println(e);
		context.registerShutdownHook();
	}

}
