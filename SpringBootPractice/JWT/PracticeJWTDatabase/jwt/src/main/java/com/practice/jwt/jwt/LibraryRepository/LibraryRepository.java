package com.practice.jwt.jwt.LibraryRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.jwt.jwt.LibraryEntity.Role;
import com.practice.jwt.jwt.LibraryEntity.User;

@Repository
public interface LibraryRepository extends JpaRepository<User, String> {

    public Optional<User> findByEmail(String email);

    User findByRole(Role role);
}
