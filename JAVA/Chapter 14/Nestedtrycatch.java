import java.util.Scanner;

public class Nestedtrycatch {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        System.out.println("Enter the size of the array");
        n = sc.nextInt();
        int[] marks;
        marks = new int[n];
        System.out.println("Enter the elements in marks array");
        for (int i = 0; i < n; i++) {
            System.out.printf("marks[%d]=", i);
            marks[i] = sc.nextInt();
            System.out.println();
        }
        System.out.println("Enter the array index");
        int index = sc.nextInt();
        try {
            System.out.println("Welcome to the demo of Nested try catch block");
            try {
                System.out.println(marks[index]);
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Sorry this index does not exist");
                System.out.println("Exception at level 2");
            }
        } catch (Exception e) {
            System.out.println("Exception at level 1");
        }
    }
}
