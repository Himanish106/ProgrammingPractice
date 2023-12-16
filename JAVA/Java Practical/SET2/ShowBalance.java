/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET2;

/**
 *
 * @author Gablu
 */
import java.util.Scanner;

class Account {

    String name, address, type;
    long acntno, balance;

    Account(String name, long acntno, long balance) {
        this.name = name;
        this.acntno = acntno;
        this.balance = balance;
    }

    Account(String name, long acntno, String address, String type, long balance) {
        this.name = name;
        this.acntno = acntno;
        this.address = address;
        this.type = type;
        this.balance = balance;
    }

    void deposit(int d) {
        balance = balance + d;
    }

    void withdraw(int w) {
        balance = balance - w;
    }

    long getBalance() {
        return balance;
    }

    void show() {
        System.out.println("ACCOUNT DETAILS");
        System.out.println("----------------------");
        System.out.println("Name: " + name);
        System.out.println("Address: " + address);
        System.out.println("Account No: " + acntno);
        System.out.println("Type of account: " + type);
        System.out.println("Account Balance: " + balance);
    }
}

public class ShowBalance {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name, address, type;
        long acntno, balance;
        System.out.println("Enter the name of account holder:");
        name = sc.nextLine();
        System.out.println("Enter the address of the account holder:");
        address = sc.nextLine();
        System.out.println("Enter the type of bank account");
        type = sc.next();
        System.out.println("Enter the account no of the account:");
        acntno = sc.nextLong();
        System.out.println("Enter the balance in the account:");
        balance = sc.nextLong();
        Account a1 = new Account(name, acntno, balance);
        Account a2 = new Account(name, acntno, address, type, balance);
        System.out.println("Initial account of the Account holder:");
        System.out.println(a1.getBalance());
        System.out.println("Enter amount to be deposited:");
        int d = sc.nextInt();
        a1.deposit(d);
        System.out.println("New Account Balance: " + a1.getBalance());
        a2.show();
        System.out.println("Initial account of the Account holder:");
        System.out.println(a2.getBalance());
        System.out.println("Enter an amount to be withdrawn");
        int w = sc.nextInt();
        a2.withdraw(w);
        System.out.println("New Account Balance: " + a2.getBalance());
        a2.show();
    }
}
