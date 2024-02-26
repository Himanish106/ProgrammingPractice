package com.user.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.user.entities.User;
@Repository
public interface UserDataRepository extends CrudRepository<User, Integer>{

}
/* 
 * CrudRepository ---> CrudRepository is an interface provided by Spring Data JPA, which is a part of the larger Spring Data project. It provides generic CRUD (Create, Read, Update, Delete) operations for a specific type of entity.

Here are the key points about CrudRepository:

Generic Interface: CrudRepository is a generic interface, meaning it can work with any type of entity. When you extend CrudRepository, you specify the entity type as a type parameter.

Common CRUD Operations: It provides commonly used CRUD operations such as save, findById, findAll, delete, and count. These operations allow you to perform basic database operations on entities without having to write explicit SQL queries.

Custom Query Methods: In addition to the standard CRUD methods, CrudRepository also supports the creation of custom query methods. You can define method signatures following Spring Data's method naming conventions, and Spring Data will automatically generate the corresponding SQL queries based on the method names.

Pagination and Sorting: CrudRepository supports pagination and sorting out of the box. You can use methods like findAll(Pageable pageable) to retrieve entities in a paginated manner and findAll(Sort sort) to retrieve entities sorted according to specified criteria. 

NOTE:- HERE INTEGER IS A PRIMARY KEY. This means that in the second field we have to mention the data type of the primary key field.
 */