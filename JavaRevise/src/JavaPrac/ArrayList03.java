/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JavaPrac;

import java.util.ArrayList;

/**
 *
 * @author hp
 */
public class ArrayList03 {

    public static void main(String[] args) {
// Syntax:
        ArrayList<Integer> list = new ArrayList<>(4);// 4 here means the initial capacity of the list
        list.add(20);
        list.add(30);
        list.add(40);
        list.add(50);
        list.add(60);
        list.add(70);
        System.out.println(list);
    }
}
