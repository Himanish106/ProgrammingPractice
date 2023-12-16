import java.util.Scanner;

public class ErrorDemo {
    public static void main(String[] args) {
        // 1) Syntax error
        int a, b;
        a = 5;
        b = 10;
        // c=a+b; ---> Data type not mentioned hence syntax error
        // 2) Logical error

        // Write a program to print prime numbers between 1 & 10

        // System.out.println(2);
        // for (int i = 1; i < 5; i++) {
        // System.out.println(2 * i + 1);
        // } ---> It is a logical error since the question given here is to print prime
        // numbers but we have printed odd numbers

        // 3) Runtime error

        int k;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of k");
        {
            k = sc.nextInt();
            System.out.println("Integer part of 1000 divided by k is " + 1000 / k); //--> This will give a run time error as if we give value of k as 0 we get error as java does not support infinite values
        }
    }
}