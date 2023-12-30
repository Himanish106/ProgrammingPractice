/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author hp
 */
public class ArrayList04 {
    
    public static void main(String[] args) {
// User Input a list
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> list = new ArrayList<>(5);
        for (int i = 0; i < 3; i++) {
            System.out.println("Enter the value at index " + i + ":");
            list.add(sc.nextInt());
        }
        System.out.println(list);
//        Now if we want to fetch a value at a particular index we cannot use the syntax of the array like:
//        System.out.println(list[0]); ---> This is a wrong syntax
// So list provides many methods for different purposes. To handle this case we will be using get method of array list
        System.out.println(list.get(2));
//      
    }
}
