package com.user;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.user.dao.UserDataRepository;
import com.user.entities.User;

@SpringBootApplication
public class BootjpaexampleApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(BootjpaexampleApplication.class, args);
		UserDataRepository userRepository = context.getBean(UserDataRepository.class);
//		User user = new User();
//		user.setName("Himanish Das");
//		user.setCity("Kolkata");
//		user.setStatus("I am learning Spring Boot");
////		User user1 = userRepository.save(user); --> For saving single user
//		User user2 = new User();
//		user2.setName("Animesh");
//		user2.setCity("Mumbai");
//		user2.setStatus("Planning to be a FullStack Developer");
//
////		Process to save multiple users
//		List<User> users = List.of(user, user2);
//		Iterable<User> result = userRepository.saveAll(users);
//		result.forEach(listUser -> {
//			System.out.println(listUser);
//		});

//		Update Operation
//		Optional<User> optional = userRepository.findById(2);
//		User user = optional.get();
////		The first 2 steps are used to fetch data from the database
//		user.setStatus("Learning Python");
//		User result=userRepository.save(user);
//		System.out.println(user);
//		Iterable<User> itr = userRepository.findAll();
//		Old technique
//		Iterator<User> iterator = itr.iterator();
//		while (iterator.hasNext()) {
//			User user = (User) iterator.next();
//			System.out.println(user);
//		}
//		itr.forEach(user -> System.out.println(user));

//		DELETING A SINGLE USER ELEMENT
//		userRepository.deleteById(1);
//		System.out.println("deleted");
		
//		DELETE ALL
		Iterable<User> allusers=userRepository.findAll();
		userRepository.deleteAll(allusers);
	}
}
