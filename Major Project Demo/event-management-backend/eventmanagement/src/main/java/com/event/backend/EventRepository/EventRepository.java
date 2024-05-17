package com.event.backend.EventRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.event.backend.Entity.Role;
import com.event.backend.Entity.User;

@Repository
public interface EventRepository extends JpaRepository<User, String> {

    public Optional<User> findByEmail(String email);
    User findByRole(Role role);
    @Query("SELECT u FROM User u WHERE u.role = :role")
    List<User> findUsersByRoleUser(@Param("role") Role role);
   @Query("SELECT u.firstName FROM User u WHERE u.email = :email")
    String findFirstNameByEmail(@Param("email") String email);
   
    @Query("SELECT u FROM User u WHERE u.otp = :otp")
    Optional<User> findByOtp(@Param("otp") String otp);

}
