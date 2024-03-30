package com.restapi.book.bookrestapidemo.BookEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Authors")
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int authorID;
    @Column(name = "first_name")
    private String authorFirstName;
    @Column(name = "last_name")
    private String authorLastName;
    @Column(name = "Spoken_Language")
    private String spokeLanguage;
    public Author() {
    }
    public Author(int authorID, String authorFirstName, String authorLastName, String spokeLanguage) {
        this.authorID = authorID;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.spokeLanguage = spokeLanguage;
    }
    public int getAuthorID() {
        return authorID;
    }
    public void setAuthorID(int authorID) {
        this.authorID = authorID;
    }
    public String getAuthorFirstName() {
        return authorFirstName;
    }
    public void setAuthorFirstName(String authorFirstName) {
        this.authorFirstName = authorFirstName;
    }
    public String getAuthorLastName() {
        return authorLastName;
    }
    public void setAuthorLastName(String authorLastName) {
        this.authorLastName = authorLastName;
    }
    public String getSpokeLanguage() {
        return spokeLanguage;
    }
    public void setSpokeLanguage(String spokeLanguage) {
        this.spokeLanguage = spokeLanguage;
    }
    @Override
    public String toString() {
        return "Author [authorID=" + authorID + ", authorFirstName=" + authorFirstName + ", authorLastName="
                + authorLastName + ", spokeLanguage=" + spokeLanguage + "]";
    }
    
}
