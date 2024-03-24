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
public class BubbleSort {

    public static void main(String[] args) {
        int arr[]={7,1,5,3,6};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));
    }

    static void bubbleSort(int arr[]) {
        boolean isSorted;
        for (int i = 0; i < arr.length - 1; i++) {
            isSorted = true;
            for (int j = 1; j < arr.length - i; j++) {
                if (arr[j] < arr[j - 1]) {
                    swap(arr,j, j-1);
                    isSorted=false;
                }
            }
            if(isSorted){
                break;
            }
        }
        
    }

    static void swap(int arr[],int first, int second) {
        int temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}
