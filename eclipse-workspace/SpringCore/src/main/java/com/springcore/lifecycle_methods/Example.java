package com.springcore.lifecycle_methods;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Example {
	private String subject;

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	@Override
	public String toString() {
		return "Example [subject=" + subject + "]";
	}

	public Example() {
		super();
		// TODO Auto-generated constructor stub
	}
// Remember to use PostConstruct and PreDestroy in case you are using Java higher than version 9 then
//	you have to add certain dependency in pom.xml. Refer for details.
	@PostConstruct
	public void start() {
		System.out.println("This is used as an init method");
	}

	@PreDestroy
	public void stop() {
		System.out.println("This is used as an destroy method");
	}
//	By default this annotations are disabled. You have to enable it in the LifeCycleconfig.xml. Refer to that.
}
