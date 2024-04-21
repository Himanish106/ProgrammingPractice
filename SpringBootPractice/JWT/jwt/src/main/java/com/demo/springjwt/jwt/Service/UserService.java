package com.demo.springjwt.jwt.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.demo.springjwt.jwt.Entity.User;

@Service
public class UserService {
    private List<User> store = new ArrayList<>();

    public UserService() {
        store.add(new User(UUID.randomUUID().toString(), "Himanish", "himanish.das23@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(), "Ravi", "ravi23@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(), "Mukesh", "mukesh23@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(), "Sharmila", "sharmila23@gmail.com"));
    }

    public List<User> getUsers(){
        return this.store;
    }

}
