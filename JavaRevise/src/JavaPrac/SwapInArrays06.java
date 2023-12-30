/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac;

import java.util.Arrays;

/**
 *
 * @author hp
 */
public class SwapInArrays06 {

    public static void main(String[] args) {
        int arr[] = {10, 2, 43, 56, 78, 90};
        System.out.println("Before Swapping:");
        System.out.println(Arrays.toString(arr));
        swap(arr, 0, 4);
        System.out.println("After Swapping:");
        System.out.println(Arrays.toString(arr));
    }

    static void swap(int arr[], int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}
