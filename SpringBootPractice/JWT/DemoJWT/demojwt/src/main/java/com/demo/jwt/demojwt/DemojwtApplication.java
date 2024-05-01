package com.demo.jwt.demojwt;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.demo.jwt.demojwt.LibraryEntity.Role;
import com.demo.jwt.demojwt.LibraryEntity.User;
import com.demo.jwt.demojwt.LibraryRepository.LibraryRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class DemojwtApplication {

	@Autowired
	private LibraryRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(DemojwtApplication.class, args);
	}

	@PostConstruct
	public void init() {
		User adminAccount = repository.findByRole(Role.ADMIN);
		if (adminAccount == null) {
			User user = new User();
			user.setId(UUID.randomUUID().toString());
			user.setEmail("admin@gmail.com");
			user.setPassword(passwordEncoder.encode("admin"));
			user.setRole(Role.ADMIN);
			repository.save(user);
		}
	}
}
