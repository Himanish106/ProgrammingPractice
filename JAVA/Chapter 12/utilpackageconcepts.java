
// import java.util.Scanner;
// import java.util.*;

public class utilpackageconcepts {
    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        java.util.Scanner sc = new java.util.Scanner(System.in);
        System.out.println("Take an input");
        int a = sc.nextInt();
        System.out.println("This is my scanner taking " + a + " as input");
        sc.close();
    }
}
