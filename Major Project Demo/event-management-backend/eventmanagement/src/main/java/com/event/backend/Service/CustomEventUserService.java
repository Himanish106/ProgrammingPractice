package com.event.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.event.backend.Entity.User;
import com.event.backend.EventRepository.EventRepository;

@Service
public class CustomEventUserService implements UserDetailsService {
    @Autowired
    private EventRepository eventRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = this.eventRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User Not Found"));
        return user;
    }
}
