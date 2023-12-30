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
public class TwoDArraysVariableLength02 {

    public static void main(String[] args) {
        int arr[][] = {{1, 2, 3}, {4, 5, 6, 7}, {8, 9}, {10, 11, 12, 13}
        };
        for (int row = 0; row < arr.length; row++) {
            for (int col = 0; col < arr[row].length; col++) {
                System.out.print(arr[row][col]+" ");
            }
            System.out.println();
        }
    }
}
