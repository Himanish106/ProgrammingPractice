package com.practice.jwt.jwt;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.practice.jwt.jwt.LibraryEntity.Role;
import com.practice.jwt.jwt.LibraryEntity.User;
import com.practice.jwt.jwt.LibraryRepository.LibraryRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class JwtApplication {

	@Autowired
	private LibraryRepository libraryRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	public static void main(String[] args) {
		SpringApplication.run(JwtApplication.class, args);
	}

	@PostConstruct
	public void init() {
        User adminAccount = libraryRepository.findByRole(Role.ADMIN);
        if (adminAccount == null) {
            User user = new User();
            user.setId(UUID.randomUUID().toString());
            user.setEmail("admin@gmail.com");
            user.setPassword(passwordEncoder.encode("admin")); // Encode it to fix the error
            user.setRole(Role.ADMIN);
            libraryRepository.save(user);
        }
	}
}
