import java.util.Scanner;

public class TryCatchdemo {
    public static void main(String[] args) {
        int divisor;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of dividend");
        int dividend = sc.nextInt();
        System.out.println("Enter the value of divisor");
        divisor = sc.nextInt();
        // Without try
        // int result = dividend / divisor;
        try {
            int result = dividend / divisor;
            System.out.println("The result is " + result);
        } catch (Exception e)// Exception is a class and e is the reference of the class
         {
            System.out.println("We failed to divide. Reason: ");
            System.out.println(e);
        }
        System.out.println("End of the program");
    }
}
