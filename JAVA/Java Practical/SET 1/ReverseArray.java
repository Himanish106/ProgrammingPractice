import java.util.Scanner;

public class ReverseArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array");
        int n = sc.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter the elements in the array");
        for (int i = 0; i < arr.length; i++) {
            System.out.print("Element " + i + "=");
            arr[i] = sc.nextInt();
        }
        System.out.println("Before reverse");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + "\t");
        }
        System.out.println("\nAfter reverse");
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + "\t");
        }
    }
}
