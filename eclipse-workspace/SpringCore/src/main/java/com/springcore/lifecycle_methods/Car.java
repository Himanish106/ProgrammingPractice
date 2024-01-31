package com.springcore.lifecycle_methods;

public class Car {
	private double price;

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		System.out.println("Setting Price");
		this.price = price;
	}

	@Override
	public String toString() {
		return "Car [price=" + price + "]";
	}

	public Car() {
		super();
	}

	/*
	 * There are basically two life cycle methods of spring: 1) init() ---> Runs at
	 * the time of initialization of the bean. 2) destroy() ---> Runs when we have
	 * to destroy something consider objects
	 * 
	 * Here we are trying to implement this methods using XML.
	 */
//	Syntax
	public void init() {
		System.out.println("Inside init method");
	}

	public void destroy() {
		System.out.println("Inside destroy method");
	}
//	You can give any name to init or destroy method. But it is preferable to give the original names only.
}
