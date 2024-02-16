package OOPS.ExceptionHandling;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Exception02 {

    public static void main(String[] args) {
        System.out.println("Started....");
        Scanner sc = new Scanner(System.in);
        int arr[] = new int[2];
        while (true) {
            for (int i = 0; i < 2; i++) {
                try {
                    System.out.print("arr[" + i + "] = ");
                    arr[i] = sc.nextInt();
                } catch (InputMismatchException e) {
                    System.out.println(e.getMessage());
                    System.out.println("Input is not an integer. Please enter an integer.");
                    sc.next();
                    i--;
                }
            }
            try {
                int n1 = arr[0];
                int n2 = arr[1];
                System.out.println("We have got two numbers");
                int result = n1 / n2;
                System.out.println("Division is: " + result);
                break;
            } catch (ArithmeticException e) {
                System.out.println(e.getMessage());
                System.out.println("Divisor cannot be 0. Please Try again");
            } finally {
                System.out.println("This is the finally block that will always execute");
            }
        }
        System.out.println("Terminated...");
    }
}
