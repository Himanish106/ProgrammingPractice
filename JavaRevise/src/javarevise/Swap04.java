package javarevise;

public class Swap04 {

    public static void main(String[] args) {
        Integer a = 10;
        Integer b = 40;
        swap(a, b);
        System.out.println("Value of a is: " + a + " and b is " + b);
    }

    static void swap(Integer a, Integer b) {
        Integer temp = a;
        a = b;
        b = temp;
    }
}

//Reason is the type of the Integer Wrapper Class is final. So the Swap was not successful. Since Integer is a final class we can alter the values of the objects inside it. But we cannot change the reference of this objects. All Wrapper Classes in Java are final

// We will see 2 possible approaches to make this successful.