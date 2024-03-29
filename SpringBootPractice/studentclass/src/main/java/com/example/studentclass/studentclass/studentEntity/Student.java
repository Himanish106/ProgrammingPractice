package com.example.studentclass.studentclass.studentEntity;

public class Student {
    int roll;
    String name;
    String address;
    long phoneNumber;

    @Override
    public String toString() {
        return "Student [roll=" + roll + ", name=" + name + ", address=" + address + ", phoneNumber=" + phoneNumber
                + "]";
    }

    public int getRoll() {
        return roll;
    }

    public void setRoll(int roll) {
        this.roll = roll;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Student() {
    }

    public Student(int roll, String name, String address, long phoneNumber) {
        this.roll = roll;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

}
