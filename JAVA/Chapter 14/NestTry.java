public class NestTry {
    public static void main(String[] args) {
        try {
            int a = args.length;
            /*
             * If no command line arguments are present, the following statement will
             * generate a divide by zero exception
             */
            int b = 42 / a;
            System.out.println("a= " + a);
            try {
                if (a == 1) {
                    /*
                     * If one command line argument is used then a divide by zero exception will be
                     * generated according to
                     * the following code
                     */
                    a = a / (a - a);
                }
                if (a == 2) {
                    /* If two command line args are used then generate an out of bounds exception */
                    int c[] = { 1 };
                    c[42] = 99; // Generate an out of bounds exception
                }
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Array index out of bounds: " + e);
            }
        } catch (ArithmeticException e) {
            System.out.println("Divide by 0: " + e);
        }
    }
}
