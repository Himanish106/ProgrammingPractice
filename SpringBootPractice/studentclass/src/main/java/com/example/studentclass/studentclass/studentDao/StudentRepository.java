package com.example.studentclass.studentclass.studentDao;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Repository;

import com.example.studentclass.studentclass.studentEntity.Student;

@Repository
public class StudentRepository {
    private static List<Student> students = new ArrayList<Student>();
    static {
        students.add(new Student(1, "Himanish", "Kolkata", 9073889463L));
        students.add(new Student(2, "Abhishek", "Kolkata", 9073889464L));
        students.add(new Student(3, "Nitin", "Kolkata", 9073889465L));
    }

    public List<Student> allStudents() {

        return students;
    }

    public Student getStudentbyRoll(int roll) {
        List<Student> students = allStudents();
        for (Student student : students) {
            if (student.getRoll() == roll) {
                return student;
            }
        }
        return null;
    }

    public Student addStudent(Student student) {
        List<Student> students = allStudents();
        students.add(student);
        return student;
    }

    public void deleteStudent(int roll) {
        students.removeIf(student -> student.getRoll() == roll);
    }

    public void updateStudent(Student student, int roll) {
        students = students.stream().map(s -> {
            if (s.getRoll() == roll) {
                s.setRoll(student.getRoll());
                s.setName(student.getName());
                s.setAddress(student.getAddress());
                s.setPhoneNumber(student.getPhoneNumber());
            }
            return s;
        }).collect(Collectors.toList());
    }
}
