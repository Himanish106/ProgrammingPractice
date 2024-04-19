package com.demo.datauploader.demodataupload.UserDao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.datauploader.demodataupload.UserEntity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    
}
