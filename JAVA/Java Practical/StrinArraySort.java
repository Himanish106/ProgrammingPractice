import java.util.Scanner;

public class StrinArraySort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of elements");
        int size = sc.nextInt();
        String arr[] = new String[size];
        System.out.println("Enter the elements");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.next();
        }
        System.out.println("Before Sorting");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + "\t");
        }
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j].compareTo(arr[j + 1]) > 0) {
                    String temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        System.out.println("After Sorting");
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + "\t");
        }
    }
}
