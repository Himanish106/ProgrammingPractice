package com.spring.autowiring.autowiredannotation;

import org.springframework.beans.factory.annotation.Autowired;

public class Employee {
//	@Autowired can be applied on 
//	1) Property 2) Setter 3) Constructor
	
	//@Autowired //--> Applied on property for Autowiring
	private Address address;

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public Employee(Address address) {
		super();
		this.address = address;
	}

	public Address getAddress() {
		return address;
	}

	/* @Autowired */
	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Employee [address=" + address + "]";
	}
	
}
