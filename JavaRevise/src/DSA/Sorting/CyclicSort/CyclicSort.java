package DSA.Sorting.CyclicSort;

import java.util.Arrays;

public class CyclicSort {
// Use cyclic sort when you have to deal with the numbers from 1 to N

    public static void main(String[] args) {
        int arr[] = {3, 5, 2, 1, 4};
        cycleSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void cycleSort(int arr[]) {
        int pointer = 0;
        while (pointer < arr.length) {
            int correctIndex = arr[pointer] - 1;
            if (arr[pointer] != arr[correctIndex]) {
                swap(arr, pointer, correctIndex);
            } else {
                pointer++;
            }
        }
    }

    static void swap(int arr[], int pointer, int correctIndex) {
        int temp = arr[pointer];
        arr[pointer] = arr[correctIndex];
        arr[correctIndex] = temp;
    }
}
