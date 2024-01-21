/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

class Student {

    private String name;
    private int age;
    private double grade;

    public Student(String name, int age, double grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
//    Setter methods are used to modify the private fields

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
    // Getter methods are used for accessing private fields

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public double getGrade() {
        return grade;
    }

    public void displayInfo() {
        System.out.println("Student: " + name + ", Age: " + age + ", Grade: " + grade);
    }
}

public class Encapsulation15 {

    public static void main(String[] args) {
        Student s = new Student("John", 16, 7.5);
        System.out.println(s.getName());
        System.out.println(s.getAge());
        System.out.println(s.getGrade());
        s.setName("Himanish");
        s.setAge(21);
        s.setGrade(9.04);
        s.displayInfo();
    }
}
