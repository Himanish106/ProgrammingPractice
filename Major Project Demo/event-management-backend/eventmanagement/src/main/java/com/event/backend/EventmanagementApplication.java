package com.event.backend;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.event.backend.Entity.Role;
import com.event.backend.Entity.User;
import com.event.backend.EventRepository.EventRepository;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class EventmanagementApplication {

	@Autowired
	private EventRepository eventRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(EventmanagementApplication.class, args);
	}

	@PostConstruct
	public void init() {
		User adminAccount = eventRepository.findByRole(Role.ADMIN);
		if (adminAccount == null) {
			User user = new User();
			user.setId(UUID.randomUUID().toString());
			user.setEmail("admin@gmail.com");
			user.setFirstName("Himanish");
			user.setLastName("Das");
			user.setContact(9073889463L);
			user.setPassword(passwordEncoder.encode("admin")); // Encode it to fix the error
			user.setRole(Role.ADMIN);
			eventRepository.save(user);
		}
	}
}
