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

public class Fibonacci {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the range");
        int n = sc.nextInt();
        int c = 0;
        int d = 1;
        System.out.print(c + "\t");
        System.out.print(d + "\t");
        for (int i = 2; i < n; i++) {
            int sum = c + d;
            System.out.print(sum + "\t");
            c = d;
            d = sum;
        }
    }
}
