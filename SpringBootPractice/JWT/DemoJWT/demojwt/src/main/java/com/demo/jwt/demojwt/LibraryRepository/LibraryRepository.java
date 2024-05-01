package com.demo.jwt.demojwt.LibraryRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.jwt.demojwt.LibraryEntity.Role;
import com.demo.jwt.demojwt.LibraryEntity.User;

@Repository
public interface LibraryRepository extends JpaRepository<User, String> {

    User findByRole(Role role);
}
