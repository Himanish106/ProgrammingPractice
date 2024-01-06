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
public class SearchMax2D14 {
    
    public static void main(String[] args) {
        int arr[][] = {{32, 21, 15},
        {42, 56, 78, 90},
        {22, 67, 105, 157, 43, 95},
        {88, 56, 106, 42, 82, 99}};
        System.out.println("The maximum value in the array is:" + maxValue(arr));
    }
    
    static int maxValue(int arr[][]) {
        int maxVal = arr[0][0];
        if (arr.length == 0) {
            return 0;
        }
        for (int[] arr1 : arr) {
            for (int col = 0; col < arr1.length; col++) {
                maxVal = Math.max(maxVal, arr1[col]);
            }
        }
        return maxVal;
    }
}
