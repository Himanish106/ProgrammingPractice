package com.example.studentclass.studentclass.StudentController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentclass.studentclass.StudentService.StudentService;
import com.example.studentclass.studentclass.studentEntity.Student;

@RestController
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = this.studentService.getAllStudents();
        if (students.size() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(students));
    }

    @GetMapping("/students/{rollNo}")
    public ResponseEntity<Student> getStudentbyRoll(@PathVariable("rollNo") int rollNo) {
        Student student = this.studentService.getStudentbyRoll(rollNo);
        if (student == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(student));
    }

    @PostMapping("/students")
    public ResponseEntity<Student> addStudent(@RequestBody Student student) {
        Student addedStudent = null;
        try {
            addedStudent = this.studentService.addStudent(student);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/students/{rollNo}")
    public ResponseEntity<Void> deleteStudent(@PathVariable("rollNo") int rollNo) {
        try {
            this.studentService.deleteStudent(rollNo);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/students/{rollNo}")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student, @PathVariable("rollNo") int rollNo) {
        try {
            this.studentService.updateStudent(student, rollNo);
            return ResponseEntity.ok().body(student);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
