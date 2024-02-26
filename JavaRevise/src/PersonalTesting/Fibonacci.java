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
public class Fibonacci {

    public static void main(String[] args) {
        int a = 0;
        int b = 1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the series");
        int n = sc.nextInt();
        System.out.print(a + " " + b+" ");
        for (int i = 0; i < n; i++) {
            int sum = a + b;
            System.out.print(sum+" ");
            a = b;
            b = sum;

        }
    }
}
