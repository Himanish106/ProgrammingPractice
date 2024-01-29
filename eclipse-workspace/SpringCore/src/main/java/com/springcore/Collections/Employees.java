package com.springcore.Collections;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class Employees {
	private String name;
	private List<Long> phoneNumbers;
	private Set<String> addresses;
	private Map<String, String> courses;

	public Employees() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employees(String name, List<Long> phoneNumbers, Set<String> addresses, Map<String, String> courses) {
		super();
		this.name = name;
		this.phoneNumbers = phoneNumbers;
		this.addresses = addresses;
		this.courses = courses;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Long> getPhoneNumbers() {
		return phoneNumbers;
	}

	public void setPhoneNumbers(List<Long> phoneNumbers) {
		this.phoneNumbers = phoneNumbers;
	}

	public Set<String> getAddresses() {
		return addresses;
	}

	public void setAddresses(Set<String> addresses) {
		this.addresses = addresses;
	}

	public Map<String, String> getCourses() {
		return courses;
	}

	public void setCourses(Map<String, String> courses) {
		this.courses = courses;
	}

}
