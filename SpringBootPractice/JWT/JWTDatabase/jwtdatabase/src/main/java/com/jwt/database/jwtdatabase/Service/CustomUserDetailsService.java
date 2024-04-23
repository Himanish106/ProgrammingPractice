package com.jwt.database.jwtdatabase.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jwt.database.jwtdatabase.Entity.User;
import com.jwt.database.jwtdatabase.Repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // load user from database
        User user = this.userRepository.findByEmail(username).orElseThrow(() -> new RuntimeException("User not found!!"));
        return user;
    }

}
