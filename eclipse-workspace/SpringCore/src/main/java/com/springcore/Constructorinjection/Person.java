package com.springcore.Constructorinjection;

import java.util.List;

public class Person {
	private String name;
	private int personId;
	private Certi certi;
	private List<String> favourites;
	public Person(String name, int personId) {
		this.name = name;
		this.personId = personId;
	}

	public Person(String name, int personId, Certi certi) {
		this.name = name;
		this.personId = personId;
		this.certi = certi;
	}

	
	public Person(String name, int personId, Certi certi, List<String> favourites) {
		super();
		this.name = name;
		this.personId = personId;
		this.certi = certi;
		this.favourites = favourites;
	}

	@Override
//	public String toString() {
//		return name + ":" + personId;
//	}
//	public String toString() {
//		return name + ":" + personId+" has got a certificate on :"+this.certi.name;
//	}
	
	public String toString() {
		return name + ":" + personId+" has got a certificate on :"+this.certi.name+". His favourites were "+this.favourites;
	}

}
