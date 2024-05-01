package com.event.backend.Service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.event.backend.Entity.Role;
import com.event.backend.Entity.User;
import com.event.backend.EventRepository.EventRepository;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveUser(User user) {
        Optional<User> existingUserOptional = eventRepository.findByEmail(user.getEmail());
        if (existingUserOptional.isPresent()) {
            throw new RuntimeException("User with this email is already registered.");
        }
        user.setId(UUID.randomUUID().toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        return eventRepository.save(user);
    }
    public String findFirstNameByEmail(String email) {
        return eventRepository.findFirstNameByEmail(email);
    }
}
