/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javarevise;

/**
 *
 * @author hp
 */
public class Student {

    public static void main(String[] args) {
        StudentInfo kunal = new StudentInfo(55, "Kunal", 45.2f);
//        System.out.println(kunal.name);
//        System.out.println(kunal.rollNo);
//        System.out.println(kunal.marks);
        StudentInfo Ravi = new StudentInfo(kunal);
        System.out.println(Ravi.marks);
        System.out.println(Ravi.name);
        System.out.println(Ravi.rollNo);
    }
}

class StudentInfo {

    int rollNo;
    String name;
    float marks;

    public StudentInfo(int rollNo, String name, float marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
    }

    public StudentInfo(StudentInfo other) {
        this.name = other.name;
        this.rollNo = other.rollNo;
        this.marks = other.marks;
    }
}
