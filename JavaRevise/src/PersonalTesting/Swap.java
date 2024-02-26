/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

import java.util.Scanner;

/**
 *
 * @author Himanish
 */
public class Swap {

    public static void main(String[] args) {
        int a, b;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st number:");
        a = sc.nextInt();
        System.out.println("Enter 2nd number:");
        b = sc.nextInt();
        System.out.println("After Swapping...");
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("a=" + a +" "+ "b=" + b);
    }
}
