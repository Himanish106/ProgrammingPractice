/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DSA.Sorting;

import java.util.Arrays;

/**
 *
 * @author Himanish
 */
public class BubbleSort {

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void bubbleSort(int arr[]) {
        boolean isSorted;
//   Run the steps n-1 times
        for (int i = 0; i < arr.length - 1; i++) {
            System.out.println("No of passes:" + (i + 1));
            isSorted = true;
//    For each step the max item will come at the last respective index
            for (int j = 1; j < arr.length - i; j++) {
//    Swap if the item is smaller than the previous item
                if (arr[j] < arr[j - 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    isSorted = false;
                }
            }
            if (isSorted) {
                break;
            }
        }
    }
}
