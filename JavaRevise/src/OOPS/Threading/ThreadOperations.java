/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS.Threading;

/**
 *
 * @author Himanish
 */
public class ThreadOperations {

    public static void main(String[] args) {
        System.out.println("Program Started....");
        int x = 56 + 45;
        System.out.println("Sum is: " + x);
        Thread t = Thread.currentThread();
        System.out.println("Current running thread is:" + t.getName());
        t.setName("MainThread");
        System.out.println("Current running thread is:" + t.getName());
        System.out.println(t.getId());
        System.out.println("Program ended");
    }
}
