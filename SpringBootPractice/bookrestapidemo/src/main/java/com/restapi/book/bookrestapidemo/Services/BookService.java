package com.restapi.book.bookrestapidemo.Services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.restapi.book.bookrestapidemo.BookEntity.Book;

@Service
public class BookService {
    private static List<Book> list = new ArrayList<>();

    static {
        list.add(new Book(12, "Java Reference", "ABC", 2000.0));
        list.add(new Book(13, "Think Java", "XYZ", 3000.0));
        list.add(new Book(14, "Java Basic to Advance", "CDF", 2500.0));
        list.add(new Book(15, "Java Mastery", "GFG", 2700.0));
    }

    // get all books
    public List<Book> getAllBooks() {
        return list;
    }

    // Get a single book
    public Book getBookbyID(int id) {
        for (Book book : list) {
            if (book.getId() == id) {
                return book;
            }
        }
        return null;
    }

    // Adding a book
    public Book addBook(Book b) {
        list.add(b);
        return b;
    }

    // Delete a book
    public void deleteBook(int id) {
        list.removeIf(book -> book.getId() == id);
    }

    // Update a book
    public void updateBook(Book book, int bookId) {
        list = list.stream().map(b -> {
            if (b.getId() == bookId) {
                b.setAuthorName(book.getAuthorName());
                b.setBookName(book.getBookName());
                b.setPrice(book.getPrice());
            }
            return b;
        }).collect(Collectors.toList());
    }
}
