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
public class MultiDimensionalArrayList05 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
//        Syntax to create a 2D arrayList
        ArrayList<ArrayList<Integer>> list = new ArrayList<>(3);

//      Initializing the arrayList 
        for (int i = 0; i < 3; i++) {
            list.add(new ArrayList<>());
        }
//        Adding elements to the 2D List
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                list.get(i).add(sc.nextInt());
            }
        }
        System.out.println(list);
    }
}
