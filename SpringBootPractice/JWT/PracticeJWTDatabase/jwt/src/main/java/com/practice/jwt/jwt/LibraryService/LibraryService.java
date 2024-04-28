package com.practice.jwt.jwt.LibraryService;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.practice.jwt.jwt.LibraryEntity.User;
import com.practice.jwt.jwt.LibraryEntity.Role;
import com.practice.jwt.jwt.LibraryRepository.LibraryRepository;

@Service
public class LibraryService {

    @Autowired
    private LibraryRepository libraryRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // You have to create a seperate PasswordEncoder bean to use this. You got an error here previously because you had not created a seperate bean. Created in AppConfig.java

    public User saveBorrower(User borrower) {
        borrower.setId(UUID.randomUUID().toString());
        borrower.setPassword(passwordEncoder.encode(borrower.getPassword()));
        borrower.setRole(Role.USER);
        return libraryRepository.save(borrower);
    }
}
