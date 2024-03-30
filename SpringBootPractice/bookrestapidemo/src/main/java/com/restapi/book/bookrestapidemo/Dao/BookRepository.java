package com.restapi.book.bookrestapidemo.Dao;

import org.springframework.data.repository.CrudRepository;

import com.restapi.book.bookrestapidemo.BookEntity.Book;


public interface BookRepository extends CrudRepository<Book,Integer> {
    public Book findById(int id);
}
