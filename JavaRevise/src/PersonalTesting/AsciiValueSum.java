/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

/**
 *
 * @author Himanish
 */
public class AsciiValueSum {

    public static void main(String[] args) {
        String s = "Hello";
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            System.out.println((int)ch);
            sum = sum + (int) ch;
        }
        System.out.println("The sum is: " + sum);
    }
}
