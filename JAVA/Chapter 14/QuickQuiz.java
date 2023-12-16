
/* Write a java program that allows you to keep accessing an array */
import java.util.Scanner;

public class QuickQuiz {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean flag = true;
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
        while (flag) {
            System.out.println("Enter the array index");
            int index = sc.nextInt();
            try {
                System.out.println("Welcome to the demo of Nested try catch block");
                try {
                    System.out.println(marks[index]);
                    flag = false;
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println("Sorry this index does not exist");
                    System.out.println("Exception at level 2");
                }
            } catch (Exception e) {
                System.out.println("Exception at level 1");
            }
        }
        System.out.println("Thanks for using this program");
    }
}
