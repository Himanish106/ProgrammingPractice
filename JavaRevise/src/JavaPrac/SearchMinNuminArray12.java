/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac;

/**
 *
 * @author hp
 */
public class SearchMinNuminArray12 {

    public static void main(String[] args) {
        int arr[] = {109, 34, 23, 44, 21, 98, 45};
        System.out.println("Minimum number in the array is: " + searchMin(arr));
    }

    static int searchMin(int arr[]) {
        if (arr.length == 0) {
            return 0;
        }
        int smallest = arr[0];
        for (int i = 1; i < arr.length; i++) {
            smallest = Math.min(smallest, arr[i]);
        }
        return smallest;
    }
}
