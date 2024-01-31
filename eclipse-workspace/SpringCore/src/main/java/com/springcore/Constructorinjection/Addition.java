package com.springcore.Constructorinjection;

public class Addition {
	private int a;
	private int b;

	public Addition(int a, int b) {
		super();
		System.out.println("Having type Integer");
		this.a = a;
		this.b = b;
	}

	public Addition(double a, double b) {
		super();
		System.out.println("Having type double");
		this.a = (int) a;
		this.b = (int) b;
	}

	public Addition(String a, String b) {
		super();
		System.out.println("Having type String");
		this.a = Integer.parseInt(a);
		this.b = Integer.parseInt(b);
	}

	public void doSum() {
		System.out.println("Sum of the two numbers are:" + (this.a + this.b));
	}
}
