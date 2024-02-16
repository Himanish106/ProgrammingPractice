package OOPS.ExceptionHandling;

import java.util.InputMismatchException;
import java.util.Scanner;

class AgeInvalidException extends Exception {

    public AgeInvalidException() {
        super("Age is Invalid.");
    }

    public AgeInvalidException(String message) {
        super(message);
    }

}

public class Exception03 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            try {
                System.out.println("Please Enter the age");
                int age = sc.nextInt();
                if (age < 10) {
                    throw new AgeInvalidException("Age cannot be less than 10");
                } else {
                    System.out.println("User's age is:" + age);
                }
                break;
            } catch (InputMismatchException e) {
                System.out.println("Age can only be an Integer");
                sc.next();
            } catch (AgeInvalidException e) {
                System.out.println(e.getMessage());
            }
        }

    }
}
