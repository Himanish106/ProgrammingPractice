/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac;

import java.util.Scanner;

/**
 *
 * @author hp
 */
public class StringLinearSearch10 {

    public static void main(String[] args) {
        String arr[] = {"Himanish", "Abhishek", "Mohit", "Rahul", "Rick", "Pratim"};
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a name to be searched:");
        String target = sc.nextLine();
        System.out.println(LinearSearchStrings(arr, target));
    }

    static String LinearSearchStrings(String arr[], String target) {
        if (arr.length == 0) {
            return "Array Empty";
        }
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(target)) {
                return arr[i]+" was found at position " + i;
            }
        }
        return "Element not found";
    }
}
