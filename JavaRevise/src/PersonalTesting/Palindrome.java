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
public class Palindrome {

    public static void main(String[] args) {
        int temp, sum = 0, rem;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number to check Palindrome");
        int num = sc.nextInt();
        temp = num;
        while (temp > 0) {
            rem = temp % 10;
            sum = (sum * 10) + rem;
            temp = temp / 10;
        }
        if (sum == num) {
            System.out.println(num + " is a palindrome number");
        } else {
            System.out.println(num + " is not a palindrome number");
        }
    }
}
