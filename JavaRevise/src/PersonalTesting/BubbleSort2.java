/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

import java.util.Arrays;

/**
 *
 * @author Himanish
 */
public class BubbleSort2 {

    public static void main(String[] args) {
        int arr[] = {43, 21, 54, 22, 65, 3};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void bubbleSort(int arr[]) {
        boolean isSorted;
        for (int i = 0; i < arr.length - 1; i++) {
            isSorted = true;
            for (int j = 1; j < arr.length - i; j++) {
                if (arr[j - 1] > arr[j]) {
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
