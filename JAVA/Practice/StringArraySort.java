import java.util.Scanner;
// import java.util.Arrays;

public class StringArraySort {
    public static void main(String[] args) {
        int n;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array");
        n=sc.nextInt();
        String[] arr = new String[n];
        // System.out.println("Enter " + n + " names to sort");
        // for (int i = 0; i < arr.length; i++) {
        // arr[i] = sc.nextLine();
        // }
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextLine();
        }
        // for (int i = 0; i < n - 1; i++) {
        // for (int j = i + 1; j < arr.length; j++) {
        // if (arr[i].compareTo(arr[j]) > 0) {
        // String temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp;
        // }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i] + " ");
        }
        // }
        // // System.out.println(arr[i]);
        // }
        // System.out.println(arr);
        sc.close();
    }
}
