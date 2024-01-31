package com.springcore.lifecycle_methods;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

// Implementing bean lifecycle methods using interface
public class Bus implements InitializingBean, DisposableBean {
	/*
	 * InitializingBean--->Gives the functionality for init methods.
	 *  DisposableBean ----> Gives the functionality for destroy methods.
	 */
	private double price;

	@Override
	public String toString() {
		return "Bus [price=" + price + "]";
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Bus() {
		super();
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		// This is the init method which can be used for initialization purposes
		System.out.println("This is my init method of class Bus");

	}

	@Override
	public void destroy() throws Exception {
		// TODO Auto-generated method stub
		System.out.println("This is my destroy method of class Bus");

	}

}
