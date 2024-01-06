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
public class LinearSearch09 {

    public static void main(String[] args) {
        int arr[] = {10, 23, 45, 76, 89, 22};
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the element to be searched:");
        int target = sc.nextInt();
        int position = LinearSearch(arr, target);
        if(position==0){
            System.out.println("Element not found in the array");
            return;
        }
        System.out.println(target + " has been found at position: " + position);
    }

    static int LinearSearch(int arr[], int target) {
        if (arr.length == 0) {
            return -1;
        }
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return 0;
    }
}
