package com.practice.jwt.jwt.LibraryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.practice.jwt.jwt.LibraryEntity.User;
import com.practice.jwt.jwt.LibraryRepository.LibraryRepository;

@Service
public class CustomBorrowerDetailsService implements UserDetailsService {
    @Autowired
    private LibraryRepository libraryRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User borrower = this.libraryRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User Not Found"));
        return borrower;
    }
}
