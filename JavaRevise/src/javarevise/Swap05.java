/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javarevise;

/**
 *
 * @author hp
 */
public class Swap05 {

    public static void main(String[] args) {
        Integer[] values = {20, 30};
        swap(values);
        System.out.println("Value of a is: " + values[0] + " and b is " + values[1]);
    }

    static void swap(Integer[] values) {
        Integer temp = values[0];
        values[0] = values[1];
        values[1] = temp;
    }
}
