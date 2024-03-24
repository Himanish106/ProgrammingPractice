/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PersonalTesting;

/**
 *
 * @author Himanish
 */
public class BinarySearch {

    public static void main(String[] args) {
        int arr[] = {12, 15, 20, 22, 34, 37};
        int result = binarySearch(arr, 0, arr.length - 1, 34);
        if (result == -1) {
            System.out.println("Element not found");
        } else {
            System.out.println("Element found at position:" + result);
        }
    }

    static int binarySearch(int arr[], int start, int end, int target) {

        while (start <= end) {
            int mid = (start + end) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else if (arr[mid] < target) {
                start = mid + 1;
            }
        }
        return -1;
    }
}
