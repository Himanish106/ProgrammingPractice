package com.restapi.book.bookrestapidemo.BookEntity;

public class Book {
    private int id;
    private String bookName;
    private String authorName;
    private double price;

    public Book(int id, String bookName, String authorName, double price) {
        this.id = id;
        this.bookName = bookName;
        this.authorName = authorName;
        this.price = price;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Book() {
    }


    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Book [id=" + id + ", bookName=" + bookName + ", authorName=" + authorName + ", price=" + price + "]";
    }

}
