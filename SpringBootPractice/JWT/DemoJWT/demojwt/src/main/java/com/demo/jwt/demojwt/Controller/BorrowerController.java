package com.demo.jwt.demojwt.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.jwt.demojwt.LibraryEntity.User;
import com.demo.jwt.demojwt.LibraryService.LibraryService;

@RestController
@RequestMapping("/borrower")
public class BorrowerController {
    @Autowired
    private LibraryService libraryService;

    @PostMapping("/register")
    public ResponseEntity<User> saveBorrower(@RequestBody User borrower) {
        return ResponseEntity.ok(libraryService.saveBorrower(borrower));
    }
}
