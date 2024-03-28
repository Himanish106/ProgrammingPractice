package com.user.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.user.entities.User;

@Repository
public interface UserDataRepository extends CrudRepository<User, Integer> {
	public List<User> findByName(String name);

	public List<User> findByNameAndCity(String name, String city);
	/*
	 * findByName:- This convention should match in order to fetch data. In order to
	 * design your custom queries you do not need to write the query on your own.
	 * Spring Data JPA designs the query for you automatically if and only if the
	 * custom naming convention is correct
	 */
//	https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html --> Refer

	/*
	 * You can also write the custom queries with the help of @Query annotation.
	 * This helps to frame the query either in the form of normal SQL query or JPQL
	 * query.
	 */

	@Query("select u FROM User u") // This is known as JPQL query
	public List<User> getEveryUser();

	@Query("select u FROM User u WHERE u.name =:n")
	public List<User> getUserByName(@Param("n") String name);
	/*
	 * @Param is used to bind the variable n with the parameter name. Whatever value
	 * that will come to n will be send to name as n and name are binded with the
	 * help of @Param
	 * 
	 * NOTE: Do not give space between =: and n
	 */
	
//	Native Query
	
	@Query(value = "select * from user", nativeQuery = true)
	public List<User> everyUser();
	
	@Query(value = "select * from user where name = :n",nativeQuery = true)
	public List<User> getaUserByName(@Param("n") String name);
}
/*
 * CrudRepository ---> CrudRepository is an interface provided by Spring Data
 * JPA, which is a part of the larger Spring Data project. It provides generic
 * CRUD (Create, Read, Update, Delete) operations for a specific type of entity.
 * 
 * Here are the key points about CrudRepository:
 * 
 * Generic Interface: CrudRepository is a generic interface, meaning it can work
 * with any type of entity. When you extend CrudRepository, you specify the
 * entity type as a type parameter.
 * 
 * Common CRUD Operations: It provides commonly used CRUD operations such as
 * save, findById, findAll, delete, and count. These operations allow you to
 * perform basic database operations on entities without having to write
 * explicit SQL queries.
 * 
 * Custom Query Methods: In addition to the standard CRUD methods,
 * CrudRepository also supports the creation of custom query methods. You can
 * define method signatures following Spring Data's method naming conventions,
 * and Spring Data will automatically generate the corresponding SQL queries
 * based on the method names.
 * 
 * Pagination and Sorting: CrudRepository supports pagination and sorting out of
 * the box. You can use methods like findAll(Pageable pageable) to retrieve
 * entities in a paginated manner and findAll(Sort sort) to retrieve entities
 * sorted according to specified criteria.
 * 
 * NOTE:- HERE INTEGER IS A PRIMARY KEY. This means that in the second field we
 * have to mention the data type of the primary key field.
 */