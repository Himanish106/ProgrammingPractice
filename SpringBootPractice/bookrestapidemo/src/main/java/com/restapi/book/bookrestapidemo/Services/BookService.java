package com.restapi.book.bookrestapidemo.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.book.bookrestapidemo.BookEntity.Book;
import com.restapi.book.bookrestapidemo.Dao.BookRepository;

@Service
public class BookService {
    // private static List<Book> list = new ArrayList<>();

    // static {
    // list.add(new Book(12, "Java Reference", "ABC", 2000.0));
    // list.add(new Book(13, "Think Java", "XYZ", 3000.0));
    // list.add(new Book(14, "Java Basic to Advance", "CDF", 2500.0));
    // list.add(new Book(15, "Java Mastery", "GFG", 2700.0));
    // }

    @Autowired
    private BookRepository bookRepository;

    // get all books
    public List<Book> getAllBooks() {
        // return this.bookRepository.findAll(); --> So basically this returns an error
        // because the return type required here is List. But the findAll method
        // basically returns an Iterable. So we need to typecast it to list
        List<Book> books = (List<Book>) this.bookRepository.findAll();
        return books;
    }

    // Get a single book
    public Book getBookbyID(int id) {
        // for (Book book : list) {
        // if (book.getId() == id) {
        // return book;
        // }
        // }
        // return null;

        Book book = null;
        try {
            book = this.bookRepository.findById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return book;
    }

    // Adding a book
    public Book addBook(Book b) {
        // list.add(b);
        Book result = this.bookRepository.save(b);
        return result;
    }

    // Delete a book
    public void deleteBook(int id) {
        // list.removeIf(book -> book.getId() == id);
        bookRepository.deleteById(id);
    }

    // Update a book
    public void updateBook(Book book, int bookId) {
        // list = list.stream().map(b -> {
        //     if (b.getId() == bookId) {
        //         b.setAuthorName(book.getAuthorName());
        //         b.setBookName(book.getBookName());
        //         b.setPrice(book.getPrice());
        //     }
        //     return b;
        // }).collect(Collectors.toList());

        book.setId(bookId);
        bookRepository.save(book);
    }
}
