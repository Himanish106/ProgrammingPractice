package OOPS;

public class AutoboxingAndUnboxing {

    public static void main(String[] args) {
        /*
         * Autoboxing :- The automatic conversion of primitive data types to the object
         * of their corresponding wrapper class is known as autoboxing. For example
         * conversion of int to Integer, long to Long and double to Double etc.
         */
        @SuppressWarnings("removal")
        Integer obj = new Integer(12); // deprecated

        Integer obj1 = Integer.valueOf(12);

        Integer obj2 = 12; // Autoboxing

        /*
         * Unboxing: It is just the reverse process of autoboxing. Automatically
         * converting the object of the wrapper class to its corresponding primitive
         * type is known as unboxing.For example conversion of integer to int
         */

        int obj3 = obj2; // Unboxing
        System.out.println(obj3);

    }
}
