/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package SET3;

/**
 *
 * @author Gablu
 */
import java.util.Scanner;

public class DuplicateString {

    static void Duplicate(String arr[]) {
        int flag = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i].equals(arr[j])) {
                    System.out.println(arr[i]);
                    flag = 1;
                    break;
                }
            }
        }
        if (flag == 0) {
            System.out.println("No Duplicate elements found");
        }
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of elements");
        int size = sc.nextInt();
        String arr[] = new String[size];
        System.out.println("Enter the elements");
        for (int i = 0; i < size; i++) {
            arr[i] = sc.next();
        }
        System.out.println("Duplicated elements are :");
        Duplicate(arr);
    }
}
