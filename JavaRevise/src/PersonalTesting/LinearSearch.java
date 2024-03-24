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
public class LinearSearch {

    public static void main(String[] args) {
        int arr[]={45,12,67,32,19};
        int element=33;
        if(LinearSearch(arr, element)){
            System.out.println("Number found");
        }
        else{
            System.out.println("Number not found");
        }
    }

    static boolean LinearSearch(int arr[], int element) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                return true;
            }
        }
        return false;
    }

}
