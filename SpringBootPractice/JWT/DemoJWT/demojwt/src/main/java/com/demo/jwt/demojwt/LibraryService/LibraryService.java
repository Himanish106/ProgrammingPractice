package com.demo.jwt.demojwt.LibraryService;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.jwt.demojwt.LibraryEntity.Role;
import com.demo.jwt.demojwt.LibraryEntity.User;
import com.demo.jwt.demojwt.LibraryRepository.LibraryRepository;

@Service
public class LibraryService {
    
    @Autowired
    private LibraryRepository libraryRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveBorrower(User borrower){
        borrower.setId(UUID.randomUUID().toString());
        borrower.setPassword(passwordEncoder.encode(borrower.getPassword()));
        borrower.setRole(Role.USER);
        return libraryRepository.save(borrower);
    }
}
