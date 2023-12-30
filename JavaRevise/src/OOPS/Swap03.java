/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package OOPS;

/**
 *
 * @author hp
 */
public class Swap03 {

    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        swap(a, b);
        System.out.println("Value of a is: " + a + " and b is " + b);
    }

    static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
    }
}
// There has been no change because in java there is no such concept of pass by reference. There is only concept of pass by value. So we may think that we can use the wrapper class concept to successfully perform the swapping because we may pass the reference of the object of the class to do so.