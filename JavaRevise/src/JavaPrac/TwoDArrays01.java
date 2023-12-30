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
public class TwoDArrays01 {

    public static void main(String[] args) {
        int[][] arr1 = new int[4][];
//        It is always not necessary to mention the column size because the internal size of the array may vary.
        arr1[0] = new int[]{1, 2, 3};
        arr1[1] = new int[]{4, 5};
        arr1[2] = new int[]{6, 7, 8, 9};
        arr1[3] = new int[]{10};
        for (int[] arr11 : arr1) {
            for (int j = 0; j < arr11.length; j++) {
                System.out.print(arr11[j] + " ");
            }
            System.out.println();
        }
}
}
