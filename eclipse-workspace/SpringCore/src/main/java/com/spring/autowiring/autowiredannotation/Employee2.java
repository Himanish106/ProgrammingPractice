package com.spring.autowiring.autowiredannotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Employee2 {

//	@Autowired
//	@Qualifier("address2") 
	private Address2 address;

	public Employee2() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public Employee2(@Qualifier("address2") Address2 address) {
		super();
		this.address = address;
	}

	public Address2 getAddress() {
		return address;
	}


//	@Autowired
//	@Qualifier("address2") 
	public void setAddress(Address2 address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Employee2 [address=" + address + "]";
	}
}
