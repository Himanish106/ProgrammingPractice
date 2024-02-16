package OOPS.ExceptionHandling;

class NegativeRadiusException extends Exception {

    public NegativeRadiusException(String message) {
        super(message);
    }

}

public class Exception05_Throw_vs_Throws {

    public static double calculateArea(int radius) throws NegativeRadiusException {
        if (radius < 0) {
            throw new NegativeRadiusException("Radius cannot be negative");
        }
        return Math.PI * Math.pow(radius, 2);
    }

    public static void main(String[] args) {
//        double result=calculateArea(5); ---> This will show an error because the exception is needed to
//        be thrown
        try {
            double result = calculateArea(-5);
            System.out.println(result);
        } catch (NegativeRadiusException e) {
            System.out.println(e.getMessage());
        }
    }
}
