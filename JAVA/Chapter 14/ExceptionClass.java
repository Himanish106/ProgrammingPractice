import java.util.Scanner;

class MyException extends Exception {
    // MyException(String exception){
    //  System.out.println(exception);
    // }
    @Override
    public String toString() {
        // return super.toString() + "I am toString()";
        return "I am toString()";
    }

    @Override
    public String getMessage() {
        // return super.getMessage() + "I am getMessage()";
        return "I am getMessage()";
    }
}

class MaxAgeException extends Exception {
    @Override
    public String toString() {
        return "Age cannot be greater than 125 or lesser than 0";
    }

    @Override
    public String getMessage() {
        return "Make sure the value of age entered is correct";
    }
}

public class ExceptionClass {
    public static void main(String[] args) {
        int a;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the value of a");
        a = sc.nextInt();
        if (a < 9) {
            try {
                throw new MyException();
                // throw new ArithmeticException("This is an arithmetic Exception");
            } catch (Exception e) {
                System.out.println(e.getMessage());
                System.out.println(e.toString());
                System.out.println(e);
                e.printStackTrace();
            }
            // if (a > 125 || a < 0) {
            // try {
            // throw new MaxAgeException();
            // } catch (Exception e) {
            // System.out.println(e.getMessage());
            // System.out.println(e);
            // }
            // } else {
            // System.out.println(a);
            // }
            System.out.println("Finished");
        }
    }
}
