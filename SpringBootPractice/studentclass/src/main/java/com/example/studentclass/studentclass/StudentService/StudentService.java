package com.example.studentclass.studentclass.StudentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.studentclass.studentclass.studentDao.StudentRepository;
import com.example.studentclass.studentclass.studentEntity.Student;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.allStudents();
    }

    public Student getStudentbyRoll(int roll) {
        return studentRepository.getStudentbyRoll(roll);
    }

    public Student addStudent(Student student) {
        return studentRepository.addStudent(student);
    }

    public void deleteStudent(int rollNo) {
        studentRepository.deleteStudent(rollNo);
    }

    public void updateStudent(Student student, int rollNo) {
        studentRepository.updateStudent(student, rollNo);
    }
}
