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
public class SelectionSort3 {

    public static void main(String[] args) {
        int arr[] = {4, 7, 2, 5, 6, 3};
        SelectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void SelectionSort(int arr[]) {
        for (int i = 0; i < arr.length - 1; i++) {
            int lastIndex = arr.length - 1 - i;
            int maximumIndex = maxIndex(arr, 0, lastIndex);
            swap(arr, maximumIndex, lastIndex);
        }
    }

    static int maxIndex(int arr[], int startIndex, int lastIndex) {
        int maxIndexValue = startIndex;
        for (int i = startIndex + 1; i <= lastIndex; i++) {
            if (arr[i] > arr[maxIndexValue]) {
                maxIndexValue = i;
            }
        }
        return maxIndexValue;
    }

    static void swap(int arr[], int first, int last) {
        int temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
    }
}
