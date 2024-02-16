package OOPS.ExceptionHandling;

public class Exception04 {

    public static int divide(int a, int b) throws ArithmeticException {
        return a / b;
    }

    public static void main(String[] args) {
        try {
            int res = divide(22, 0);
            System.out.println(res);
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage() + "Error has occured");
        }
    }
}
