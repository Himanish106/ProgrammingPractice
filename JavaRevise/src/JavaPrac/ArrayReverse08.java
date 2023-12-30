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
public class ArrayReverse08 {
//    Reverse an array

    public static void main(String[] args) {
        int arr[] = {150, 2, 243, 56, 78, 90};
        reverse(arr);
       System.out.println(Arrays.toString(arr));
    }

    static void reverse(int arr[]) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    static void swap(int arr[], int index1, int index2) {
        int temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
}
