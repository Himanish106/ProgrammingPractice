/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package SET2;

/**
 *
 * @author Gablu
 */
import java.util.Scanner;

public class Compare {

    static void compare(int a, int b) {
        if (a < b) {
            System.out.println(a + " is less than " + b);
        } else if (b < a) {
            System.out.println(a + " is greater than " + b);
        } else {
            System.out.println(a + " is equal to " + b);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st number");
        int number1 = sc.nextInt();
        System.out.println("Enter 2nd number");
        int number2 = sc.nextInt();
        compare(number1, number2);
    }
}
