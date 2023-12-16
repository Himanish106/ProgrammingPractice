import java.util.Scanner;

class NegativeException extends Exception {
    public String toString() {
        return "Radius cannot be negative";
    }

    public String getMessage() {
        return "Enter radius properly";
    }
}

public class ThrowvsThrows {
    // Made by Himanish
    public static int divide(int a, int b) throws ArithmeticException {
        int result = a / b;
        return result;
    }

    public static double area(int r) throws NegativeException {
        if (r < 0) {
            throw new NegativeException();
        }
        return Math.PI * r * r;
    }

    public static void main(String[] args) {
        // Shubham- Who is using this code
        Scanner sc = new Scanner(System.in);
        // System.out.println("Enter Dividend and divisor");
        // int a = sc.nextInt();
        // int b = sc.nextInt();
        System.out.println("Enter radius of the circle");
        int radius = sc.nextInt();
        try {

            // int c = divide(a, b);
            // System.out.println(c);
            double ar = area(radius);
            System.out.println(ar);
        } catch (Exception e) {
            System.out.println("Exception: ");
            System.out.println(e);
        }
    }
}
