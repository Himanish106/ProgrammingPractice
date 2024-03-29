package com.restapi.book.bookrestapidemo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.book.bookrestapidemo.BookEntity.Book;
import com.restapi.book.bookrestapidemo.Services.BookService;

// @Controller ---> For rest api's we need rest controller. We do not require to mention @ResponseBody if we are using RestController. 
@RestController
public class BookController {
    // @GetMapping("/books")
    // // @ResponseBody
    // public String getBooks() {
    // return "This is testing book first";
    // } // Generally we generate the response in JSON format or XML in case of Rest
    // APIs. So we may consider this particular method just for testing. So in order
    // to use JSON at first we need to create an object. So for that we need an
    // entity class. In this case it is a book class.

    // @GetMapping("/books")
    // public Book getBooks() {
    // Book book = new Book();
    // book.setId(1);
    // book.setBookName("Tom Sawyer");
    // book.setAuthorName("Mark Twain");
    // book.setPrice(3000.00);
    // return book;
    // // Spring boot will now automatically convert this book object to JSON. This
    // // book is basically a POJO i.e. Plain Old Java Object. So this POJO is
    // // converted to JSON using the JACKSON Library which Spring uses by
    // // default.Jackson provides annotations and ObjectMapper to map Java objects
    // to JSON and vice versa.
    // } Main Problem with this method it will return all the books. We may have a
    // case where we need a single book. So for that case we have created a seperate
    // service class

    @Autowired
    private BookService bookService;

    // // Receiving all books
    // @GetMapping("/books")
    // public List<Book> getallBooks() {
    // return this.bookService.getAllBooks();
    // }

    // // Receiving a single book
    // @GetMapping("/books/{id}")
    // public Book getBookbyID(@PathVariable("id") int id) {
    // return this.bookService.getBookbyID(id);
    // }

    // // Adding a book
    // @PostMapping("/books")
    // public Book addBook(@RequestBody Book book) {
    // Book b = this.bookService.addBook(book);
    // return b;
    // }

    // // Deleting a book
    // @DeleteMapping("books/{bookId}")
    // public void deleteBook(@PathVariable("bookId") int bookId) {
    // this.bookService.deleteBook(bookId);
    // }

    // // Update a book
    // @PutMapping("/books/{bookId}")
    // public Book updateBook(@RequestBody Book book,@PathVariable("bookId") int
    // id){
    // this.bookService.updateBook(book, id);
    // return book;

    // }

    // Handling of HTTP status. To handle the HTTP status we need the return type as
    // ResponseEntity of type Book
    // Receiving all books
    @GetMapping("/books")
    public ResponseEntity<List<Book>> getallBooks() {
        // Handling case if no books are present
        List<Book> list = this.bookService.getAllBooks();
        if (list.size() <= 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Explanation in txt file
        }
        return ResponseEntity.of(Optional.of(list)); 
    }

    // Receiving a single book
    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookbyID(@PathVariable("id") int id) {
        Book book = this.bookService.getBookbyID(id);
        if (book == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(book));
    }

    // Adding a book
    @PostMapping("/books")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book b = null;
        try {
            b = this.bookService.addBook(book);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Deleting a book
    @DeleteMapping("books/{bookId}")
    public ResponseEntity<Void> deleteBook(@PathVariable("bookId") int bookId) {
        try {
            this.bookService.deleteBook(bookId);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    // Update a book
    @PutMapping("/books/{bookId}")
    public ResponseEntity<Book> updateBook(@RequestBody Book book, @PathVariable("bookId") int id) {
        try {
            this.bookService.updateBook(book, id);
            return ResponseEntity.ok().body(book);
            // book is the data that needs to be included in the response body
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }
}
/*
 * Valid HTTP status codes for each type of HTTP method:
 * POST - 201
 * GET(for obtaining a single object) - 200
 * PUT - 200
 * DELETE - 200
 * GET(To retrieve all) - 200 204 206
 */