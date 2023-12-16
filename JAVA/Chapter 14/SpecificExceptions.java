import java.util.Scanner;

public class SpecificExceptions {
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
        System.out.println("Enter the number you want to divide the value with");
        int number = sc.nextInt();
        try {
            System.out.println("The value at that particular index= " + marks[index]);
            System.out.println("The value of the array value/number is= " + marks[index] / number);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception Occurred: ");
            System.out.print(e);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array Index out of bounds exception occured: ");
            System.out.print(e);
        } catch (Exception e) {
            System.out.println("Some other exceptions occurred: ");
            System.out.print(e);
        }
    }
}
