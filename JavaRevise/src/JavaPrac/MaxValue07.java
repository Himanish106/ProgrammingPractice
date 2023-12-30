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
public class MaxValue07 {

    public static void main(String[] args) {
        int arr[] = {150, 2, 243, 56, 78, 90};
        System.out.println(max(arr));
    }

    static int max(int arr[]) {
//        int temp = 0;
        int max = arr[0];
//        for (int i = 0; i < arr.length; i++) {
        for (int i = 1; i < arr.length; i++) {
//            if (temp < arr[i]) {
//                temp = arr[i];
//            }
            if (max < arr[i]) {
                max = arr[i];
            }
        }
//        return temp;
        return max;
    }
}
